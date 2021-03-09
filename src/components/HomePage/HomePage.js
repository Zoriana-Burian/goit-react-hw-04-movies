import { useState, useEffect } from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import * as fetchAPI from '../../servises/api-servises';
import s from './HomePage.module.css';
import PropTypes from 'prop-types';

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
      <h2>Trending today</h2>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id} className={s.Movie}>
              <Link to={{pathname: `/movies/${movie.id}`, state: { from: location }} }>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

HomePage.propTypes = {
  location: PropTypes.object.isRequired   
};
