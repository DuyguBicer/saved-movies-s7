import { Link } from 'react-router-dom';
export default function FilmDetaylari(props) {
  const { title, director, metascore, id } = props.movie;

  return (
    <Link to={`/filmler/${id}`}>
            
      <div className="movie-card">
                <h2>{title}</h2>
                
        <div className="movie-director">
                    Director: <em>{director}</em>
                  
        </div>
                
        <div className="movie-metascore">
                    Metascore: <strong>{metascore}</strong>
                  
        </div>
              
      </div>
          
    </Link>
  );
}
