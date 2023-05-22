import React from 'react';
import { Link } from 'react-router-dom';


const GalleryImage = ({ painting }) => {
  return (
    <div>
      <Link to={`/${painting.id}`} key={painting.id}>
        <img src={painting.images.gallery} alt={painting.title} />
        <div className="painting-details">
          <p>{painting.name}</p>
          <p>{painting.artist.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default GalleryImage;