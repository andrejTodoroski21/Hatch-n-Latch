from flask import Flask, request, redirect, session, url_for
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, origins=['http://localhost:5173'])
app.secret_key = os.getenv('FLASK_SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Google Calendar API setup
SCOPES = ['https://www.googleapis.com/auth/calendar']
CLIENT_CONFIG = {
    'web': {
        'client_id': os.getenv('GOOGLE_CLIENT_ID'),
        'client_secret': os.getenv('GOOGLE_CLIENT_SECRET'),
        'auth_uri': 'https://accounts.google.com/o/oauth2/auth',
        'token_uri': 'https://oauth2.googleapis.com/token',
        'redirect_uris': ['http://localhost:5000/oauth2callback']
    }
}

@app.route('/api/authorize')
def authorize():
    flow = Flow.from_client_secrets_file(
        CLIENT_SECRETS_FILE,
        scopes=SCOPES,
        redirect_uri='http://localhost:5000/oauth2callback'
    )
    authorization_url, state = flow.authorization_url(
        access_type = 'offline',
        include_granted_scopes = 'true'
    )
    session['state'] = state,
    return{'authorization_url':authorization_url}

@app.route('/')
def hello():
    return {'message': 'Flask backend running!'}

if __name__ == '__main__':
    app.run(debug=True, port=5000)