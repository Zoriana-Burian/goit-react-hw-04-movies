import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as fetchAPI from '../../servises/api-servises';


export default function HomePage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);

useEffect(() => {
    fetchAPI.fetchMovies().then(moviesTrend => {
      setMovies(moviesTrend.results);
    });
  }, []);

  return (
    <>
      
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}


