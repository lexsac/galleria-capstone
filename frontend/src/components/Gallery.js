import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import GalleryImage from './GalleryImage';
import '../styles/Gallery.css';


const Gallery = () => {
    const [paintings, setPaintings] = useState([]);
  
    useEffect(() => {
      axios
        .get('http://localhost:5000') 
        .then((response) => {
          setPaintings(response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);
  
    return (
      <div className="gallery">
        {paintings.map((painting) => (
          <GalleryImage painting={painting} key={painting.id} />
        ))}
      </div>
    );
  };
  
  export default Gallery;