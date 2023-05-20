import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const { paintingId } = useParams();
  const [painting, setPainting] = useState(null);

  useEffect(() => {
    axios.get(`${paintingId}`)
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
      <h2>{painting.name}</h2>
      <p>{painting.description}</p>
      {/* Display additional painting details */}
    </div>
  );
};

export default Detail;