from flask import Flask
from app import createApp

app = createApp()

if __name__ == "__main__":
    app.run()
