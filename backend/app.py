from flask import Flask, jsonify
import os
from flask_sqlalchemy import SQLAlchemy
from models import Artist, Painting, db, connect_db
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)


# Get DB_URI from environ variable (useful for production/testing) or,
# if not set there, use development local db.
# replaces 'postgres' (used by Heroku Postgres) with 'postgresql' (needed for SQLAlchemy)
try:
    prodURI = os.getenv('DATABASE_URL')
    prodURI = prodURI.replace("postgres://", "postgresql://")
    app.config['SQLALCHEMY_DATABASE_URI'] = prodURI

except:
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///galleria'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', "it's a secret")

connect_db(app)


@app.route('/')
def get_paintings():
    paintings = Painting.query.all()
    # Convert paintings to JSON and return the response
    return jsonify([p.to_dict() for p in paintings])


@app.route('/<int:painting_id>')
def get_painting(painting_id):
    # Retrieve the painting with the given ID from the database
    painting = Painting.query.get(painting_id)
    if not painting:
        return jsonify({'message': 'Painting not found'}), 404

    # Convert the painting object to a dictionary representation
    painting_data = painting.to_dict()

    # Return the painting data as JSON
    return jsonify(painting_data)

