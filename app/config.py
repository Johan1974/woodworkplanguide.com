import os

class Config:
    SITE_NAME = os.getenv("SITE_NAME", "Woodwork Plan Guide")
    AFFILIATE_URL = os.getenv("AFFILIATE_URL", "https://example.com")
    GA_ID = os.getenv("GA_ID", "")
    CONTACT_EMAIL = os.getenv("CONTACT_EMAIL", "contact@example.com")

    SMTP_HOST = os.getenv("SMTP_HOST")
    SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
    SMTP_USERNAME = os.getenv("SMTP_USERNAME")
    SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
    SMTP_USE_TLS = os.getenv("SMTP_USE_TLS", "true").lower() == "true"
