import React from 'react';

const GalleryImage = ({ painting }) => {
    return (
      <div>
        <img src={process.env.PUBLIC_URL + '/assets/starry-night/gallery.jpg'} alt="Gallery" />
        <h2>{painting.name}</h2>
        <p>{painting.artist.name}</p>
      </div>
    );
  };

  export default GalleryImage;