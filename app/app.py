from flask import Flask, render_template, request, redirect, url_for, flash, jsonify, Response
from .config import Config
import smtplib, ssl, re, bleach, datetime

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    app.secret_key = "change-me"  # For flash messages only; not used for sessions by default.

    @app.context_processor
    def inject_globals():
        return dict(
            SITE_NAME=app.config["SITE_NAME"],
            AFFILIATE_URL=app.config["AFFILIATE_URL"],
            GA_ID=app.config["GA_ID"],
            YEAR=datetime.datetime.utcnow().year,
        )

    @app.route("/")
    def index():
        return render_template("index.html")

    @app.route("/privacy")
    def privacy():
        return render_template("privacy.html")

    @app.route("/terms")
    def terms():
        return render_template("terms.html")

    @app.route("/contact", methods=["GET", "POST"])
    def contact():
        if request.method == "POST":
            name = bleach.clean(request.form.get("name", "").strip())
            email = bleach.clean(request.form.get("email", "").strip())
            message = bleach.clean(request.form.get("message", "").strip())
            if not name or not email or not message:
                flash("All fields are required.", "error")
            elif not re.match(r"[^@]+@[^@]+\.[^@]+", email):
                flash("Please enter a valid email address.", "error")
            else:
                _send_email(app, name, email, message)
                flash("Thanks! Your message has been sent.", "success")
                return redirect(url_for("contact"))
        return render_template("contact.html")

    @app.route('/robots.txt')
    def robots():
        lines = [
            "User-agent: *",
            "Allow: /",
            "Sitemap: " + url_for('sitemap', _external=True)
        ]
        return Response("\n".join(lines), mimetype='text/plain')

    @app.route('/sitemap.xml')
    def sitemap():
        pages = [
            url_for('index', _external=True),
            url_for('privacy', _external=True),
            url_for('terms', _external=True),
            url_for('contact', _external=True),
        ]
        xml = render_template('sitemap.xml', pages=pages)
        return Response(xml, mimetype='application/xml')

    @app.errorhandler(404)
    def not_found(e):
        return render_template('404.html'), 404

    return app

def _send_email(app, name, email, message):
    host = app.config.get("SMTP_HOST")
    if not host:
        return  # Silently skip if not configured
    port = app.config.get("SMTP_PORT")
    username = app.config.get("SMTP_USERNAME")
    password = app.config.get("SMTP_PASSWORD")
    use_tls = app.config.get("SMTP_USE_TLS", True)
    msg = f"From: {name} <{email}>\nTo: {app.config.get('CONTACT_EMAIL')}\nSubject: Website Contact\n\n{message}"
    context = ssl.create_default_context()
    with smtplib.SMTP(host, port) as server:
        if use_tls:
            server.starttls(context=context)
        if username and password:
            server.login(username, password)
        server.sendmail(email, [app.config.get("CONTACT_EMAIL")], msg)


app = create_app()

if __name__ == "__main__":
    app.run(debug=True)

