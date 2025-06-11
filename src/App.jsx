import React from 'react';
import { useState } from 'react';
import KaydedilenlerListesi from './components/KaydedilenlerListesi';
import { movies } from './sahteVeri.js';
import { Route, Switch } from 'react-router-dom';
import FilmListesi from './components/FilmListesi.jsx';
import Film from './components/Film.jsx';

export default function App() {
  const [savedMovies, setSavedMovies] = useState([]);

  const [filmler, setFilmler] = useState(movies);

  const KaydedilenlerListesineEkle = (movie) => {
    const savedMovie = savedMovies.find((item) => item.id === movie.id);

    if (!savedMovie) {
      setSavedMovies([...savedMovies, movie]);
    }
  };
  return (
    <div>
      {' '}
            
      <KaydedilenlerListesi list={savedMovies} />       
      <Switch>
        {' '}
                
        <Route exact path="/">
          {' '}
                    
          <FilmListesi movies={filmler} />         
        </Route>{' '}
                
        <Route path="/filmler/:id">
          {' '}
                    
          <Film KaydedilenlerListesineEkle={KaydedilenlerListesineEkle} />
        </Route>
      </Switch>
    </div>
  );
}
