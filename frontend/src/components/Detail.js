import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/Detail.css';


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
    <>
      <div className="paintingDetail__intro">
        <img src={painting.images.hero.small} alt={painting.title} className="paintingDetail__image"/>
        <div className="paintingDetail__details">
          <h2 className="paintingDetail__name  | heading-2">{painting.name}</h2>
          <h2 className="paintingDetail__artist | subhead-2">{painting.artist.name}</h2>
        </div>
      </div>

      <div className="paintingDetail__text">
        <img src={painting.artist.image} alt={painting.title} className="paintingDetail__artist-image" width="64" height="64" />  
        <p className="paintingDetail__year | display">{painting.year}</p>
        <p className="paintingDetail__description">{painting.description}</p>

        <a href={painting.source}>Go to source</a>
      </div>
    </>
  );
};

export default Detail;