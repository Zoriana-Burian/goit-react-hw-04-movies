import { useEffect, useState } from "react";
import { useHistory, useParams, useLocation,  useRouteMatch, Link, Route} from "react-router-dom";
import * as fetchAPI from '../../servises/api-servises';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import s from './MovieDetailsPage.module.css';



export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState('');
    const location = useLocation(); 
    const history = useHistory();
    const { url, path } = useRouteMatch();
    
    

    useEffect(() => {
        fetchAPI.fetchMoviesId(movieId).then(setMovie)
    }, [movieId]);

    const goNextPage = () => {
        history.push(location?.state?.from ?? '/movies');
    };

     return (
    <>
     <button type='button' onClick={goNextPage} className={s.Button}>← Go back</button>
    
         <br />
         {movie && (
        <>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width='250' />
                     <h2>{movie.title}</h2>
                     <p>User score: {movie.vote_average * 10}% </p>
                    <p>Overwiew:</p>
                    <p>{movie.overview}</p>
                     <p>Genres:</p>
                     <ul>
                         {movie.genres.map(genre => (
                             <li key={genre.id}>{genre.name}</li>))}
                     </ul>
        </>
         )}
         <>
           <p>Additional information:</p>
            <ul>
              <li>
                <Link to={{pathname: `${url}/cast`, state: { from: location?.state?.from ?? '/movies' }}}>
                 Cast
                </Link>
              </li>
              <li>
                <Link to={{pathname: `${url}/reviews`, state: { from: location?.state?.from ?? '/movies' } }}>
                  Reviews
                </Link>
              </li>
           </ul>
            <Route path={`${path}/cast`}>
              <Cast />
            </Route>
            <Route path={`${path}/reviews`}>
              <Reviews />
            </Route>
         </>
       </>
       
  );
}

