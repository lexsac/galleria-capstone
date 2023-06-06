import React from 'react';
import { Link } from 'react-router-dom';

const GalleryImage = ({ painting }) => {
  return (
      <Link to={`/${painting.id}`} key={painting.id}>
        <div className="galleryItem">
          <img src={painting.images.thumbnail} alt={painting.title} className="galleryItem__image" />
          <div className="galleryItem__details">
            <p className="galleryItem__name | heading-2">{painting.name}</p>
            <p className="galleryItem__artist | subhead-2">{painting.artist.name}</p>
          </div>
        </div>
      </Link>
  );
};

export default GalleryImage;