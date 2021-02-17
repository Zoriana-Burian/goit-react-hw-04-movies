import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import fetchAPI from '../../servises/api-servises';


export default function HomePage() {
 // const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
        fetchAPI.fetchMovies()
            .then(setMovies);
    }, [])

  return (
    <div>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.title} 
            </li>
          ))}
        </ul>
    </div>
  );
}

