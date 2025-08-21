from flask import Flask

app = Flask(__name__)

# Set the environment manually if you want
app.config["ENV"] = "development"  # or "production"
app.config["DEBUG"] = True if app.config["ENV"] == "development" else False

print("ENV:", app.config["ENV"])
print("DEBUG:", app.config["DEBUG"])
