import { useEffect, useState, lazy, Suspense } from "react";
import { useHistory, useParams, useLocation,  useRouteMatch, Link, Route} from "react-router-dom";
import * as fetchAPI from '../../servises/api-servises';
// import Cast from '../Cast/Cast';
// import Reviews from '../Reviews/Reviews';
import s from './MovieDetailsPage.module.css';
import PropTypes from 'prop-types';

const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() => import('../Reviews/Reviews' /* webpackChunkName: "reviews" */));



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
        history.push(location?.state?.from ??'/movies');
    };

     return (
    <>
     <button type='button' onClick={goNextPage} className={s.Button}>← Go back</button>
    
         <br />
         {movie && (
        <div className={s.Info}>
             <img className={s.Image} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width='250' />
             <div>
               <h2 className={s.Title}>{movie.title}</h2>
                     <p className={s.TitleTwo}>User score: {movie.vote_average * 10}% </p>
                    <p className={s.TitleTwo}>Overwiew:</p>
                    <p className={s.Text}>{movie.overview}</p>
                     <p className={s.TitleTwo}>Genres:</p>
                     <ul>
                         {movie.genres.map(genre => (
                             <li className={s.Text} key={genre.id}>{genre.name}</li>))}
                     </ul>
             </div>
                     
        </div>
         )}
         <>
           <p className={s.TitleTwo}>Additional information:</p>
            <ul>
              <li>
                <Link className={s.InfoCastRev} to={{pathname: `${url}/cast`, state: { from: location?.state?.from ?? '/movies' }}}>
                 Cast
                </Link>
              </li>
              <li>
                <Link className={s.InfoCastRev} to={{pathname: `${url}/reviews`, state: { from: location?.state?.from ?? '/movies' } }}>
                  Reviews
                </Link>
              </li>
           </ul>
           <Suspense fallback={<h1>Завантаження...</h1>}>
              <Route path={`${path}/cast`}>
              <Cast />
            </Route>
            <Route path={`${path}/reviews`}>
              <Reviews />
            </Route>
           </Suspense>
           
         </>
       </>
       
  );
}

MovieDetailsPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
     
};
