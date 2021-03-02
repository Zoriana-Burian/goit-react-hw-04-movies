import { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import * as fetchAPI from '../../servises/api-servises';

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        if (!searchQuery) {
            return;
        }

        fetchAPI.fetchMoviesSearchQuery(searchQuery).then(moviesSearch => {
            setMovies(moviesSearch.results);
        });
        

    }, [searchQuery]);

    const MoviesSearchQuery = (searchQuery) => {
        setSearchQuery(searchQuery);

        history.push({
            ...location,
            search: `searchQuery=${searchQuery}`,
        });
    }
    return ( <>
      
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
