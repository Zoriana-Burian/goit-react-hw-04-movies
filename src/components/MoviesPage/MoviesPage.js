import { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import * as fetchAPI from '../../servises/api-servises';
import s from './MoviesPage.module.css';
import PropTypes from 'prop-types';

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
  const history = useHistory();
  

  const handleChange = event => {
        setSearchQuery(event.currentTarget.value);
    };

    useEffect(() => {
        if (!searchQuery) {
            return;
        }

        fetchAPI.fetchMoviesSearchQuery(searchQuery).then(moviesSearch => {
            setMovies(moviesSearch.results);
        });
        

    }, [searchQuery]);
  
    const handlerSubmit = e => {
      e.preventDefault();
      
      history.push({
      ...location,
      search: `searchQuery=${searchQuery}`,
    });
    setSearchQuery('');
  };

    return ( <>
    <div className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handlerSubmit}>
        <input
       onChange={handleChange}
      className={s.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movies"
    />
    <button type="submit" className={s.SearchFormButton}>
      <span className={s.SearchFormButtonLabel}>Search</span>
    </button> 
    </form>
     </div>

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={{pathname: `/movies/${movie.id}`, state: { from: location }} }>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>);
}

MoviesPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
     
};