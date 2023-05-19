"""Seed file to make sample data for db."""

import os
import json

from models import db, Painting, Artist 
from app import app

API_BASE_URL = "https://www.themuse.com/api/public"
SECRET_KEY = os.environ.get('SECRET_KEY')

# Create all tables
with app.app_context():
        db.drop_all()
        db.create_all()

        # Populate the database with data from data.json
        with open('./data.json') as file:
            data = json.load(file)
            for item in data:
                artist = Artist(artist_name=item['artist']['name'], artist_image=item['artist']['image'])
                painting = Painting(
                    name=item['name'],
                    year=item['year'],
                    description=item['description'],
                    source=item['source'],
                    artist=artist,
                    thumbnail_image=item['images']['thumbnail'],
                    hero_small_image=item['images']['hero']['small'],
                    hero_large_image=item['images']['hero']['large'],
                    gallery_image=item['images']['gallery']
                )
                db.session.add(artist)
                db.session.add(painting)

            db.session.commit()
