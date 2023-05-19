"""SQLAlchemy models for my job board."""
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Painting(db.Model):
    """Paintings."""

    __tablename__ = "paintings"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    year = db.Column(db.Integer)
    description = db.Column(db.Text)
    source = db.Column(db.String(255))
    artist_id = db.Column(db.Integer, db.ForeignKey('artists.id', ondelete='cascade'))
    thumbnail_image = db.Column(db.String(255))
    hero_small_image = db.Column(db.String(255))
    hero_large_image = db.Column(db.String(255))
    gallery_image = db.Column(db.String(255))

    artist = db.relationship("Artist", backref="paintings")


class Artist(db.Model):
    """Artists."""
    
    __tablename__ = "artists"

    id = db.Column(db.Integer, primary_key=True)
    artist_name = db.Column(db.String(255))
    artist_image = db.Column(db.String(255))



def connect_db(app):
    """Connect this database to provided Flask app.

    You should call this in your Flask app.
    """

    db.app = app
    db.init_app(app)


