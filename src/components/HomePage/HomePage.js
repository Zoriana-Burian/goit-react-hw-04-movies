import { useState, useEffect } from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import * as fetchAPI from '../../servises/api-servises';


export default function HomePage() {
  // const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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
              <Link to={{pathname: `/movies/${movie.id}`, state: { from: location }} }>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

