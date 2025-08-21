from flask import Flask, render_template, request, redirect, url_for, flash, Response, abort
from .config import Config
import smtplib, ssl, re, bleach
from datetime import datetime
import os, json

from pathlib import Path
BLOG_DIR = Path("app/templates/blog")

from bs4 import BeautifulSoup

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    app.secret_key = "change-me"  # For flash messages only

    # --- Global variables for templates ---
    @app.context_processor
    def inject_globals():
        return dict(
            SITE_NAME=app.config.get("SITE_NAME", "Woodwork Plan Guide"),
            AFFILIATE_URL=app.config.get("AFFILIATE_URL", ""),
            GA_ID=app.config.get("GA_ID", ""),
            CURRENT_YEAR=datetime.now().year
        )

    app.config['TEMPLATES_AUTO_RELOAD'] = True

    # --- Routes ---
    @app.route("/")
    def index():
        return render_template("index.html")


    from bs4 import BeautifulSoup

    from bs4 import BeautifulSoup  # make sure you installed it: pip install beautifulsoup4

    def load_posts():
        posts = []
        for file_path in BLOG_DIR.glob("*.html"):
            slug = file_path.stem
            title = slug.replace("-", " ").title()
            content = file_path.read_text(encoding="utf-8")

            # Extract the first <p> paragraph
            soup = BeautifulSoup(content, "html.parser")
            first_p = soup.find("p")
            summary = first_p.get_text(strip=True) if first_p else content[:100]

            posts.append({
                "slug": slug,
                "title": title,
                "summary": summary,
                "content": content
            })

        posts.sort(key=lambda x: x["slug"], reverse=True)
        return posts

    @app.route("/blog")
    def blog():
        posts = load_posts()
        return render_template("blog.html", posts=posts)


    @app.route("/blog/<slug>")
    def blog_post(slug):
        # Check if the HTML file exists in templates/blog
        file_path = BLOG_DIR / f"{slug}.html"
        if not file_path.exists():
            abort(404)

        # Read content directly from the HTML file
        content = file_path.read_text(encoding="utf-8")
        title = slug.replace("-", " ").title()

        post = {
            "slug": slug,
            "title": title,
            "content": content,
            "date": "August 20, 2025"  # Optional: could parse from frontmatter
        }

        # Use a generic post template which extends base.html
        return render_template("blog_post.html", post=post)



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
        return
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
    if os.environ.get("FLASK_ENV") == "development":
        from livereload import Server
        server = Server(app.wsgi_app)
        server.watch("app/templates/*.html")
        server.watch("app/static/css/*.css")
        server.watch("app/static/js/*.js")
        server.serve(port=8086, host="0.0.0.0", debug=True)
    else:
        app.run(host="0.0.0.0", port=8086)
