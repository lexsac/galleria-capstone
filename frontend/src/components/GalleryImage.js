import React from 'react';
import { Link } from 'react-router-dom';


const GalleryImage = ({ painting }) => {
  return (
    <div>
      <Link to={`/paintings/${painting.id}`}>
        <img
          src={process.env.PUBLIC_URL + painting.images.gallery}
          alt="Gallery"
        />
        <h2>{painting.name}</h2>
        <p>{painting.artist.name}</p>
      </Link>
    </div>
  );
};

export default GalleryImage;