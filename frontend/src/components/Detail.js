import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const { paintingId } = useParams();
  const [painting, setPainting] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/${paintingId}`)
      .then((response) => {
        setPainting(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [paintingId]);

  if (!painting) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={painting.images.gallery} alt={painting.title} />
      <h2>{painting.name}</h2>
      <h2>{painting.artist.name}</h2>

      <img src={painting.artist.image} alt={painting.title} />  
      <p>{painting.year}</p>
      <p>{painting.description}</p>

      <a href={painting.source}>Go to source</a>
    </div>
  );
};

export default Detail;