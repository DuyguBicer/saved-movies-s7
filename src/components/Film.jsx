import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../sahteVeri.js';

export default function Film(props) {
  const { KaydedilenlerListesineEkle } = props;

  const [movie, setMovie] = useState();

  let { id } = useParams();

  useEffect(() => {
    const film = movies.find((item) => item.id === Number(id));

    setMovie(film);
  }, []);

  if (!movie) {
    return <div>Film bilgisi yükleniyor...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
            
      <div className="movie-card">
                <p>Film ID: {id}</p>
                <h2>{title}</h2>
                
        <div className="movie-director">
                    Director: <em>{director}</em>
                  
        </div>
                
        <div className="movie-metascore">
                    Metascore: <strong>{metascore}</strong>
                  
        </div>
                <h3>Actors</h3>
                
        {stars.map((star) => (
          <div key={star} className="movie-star">
                        {star}
                      
          </div>
        ))}
              
      </div>
            
      <div
        className="save-button"
        onClick={() => KaydedilenlerListesineEkle(movie)}
      >
                Kaydet       
      </div>
          
    </div>
  );
}
