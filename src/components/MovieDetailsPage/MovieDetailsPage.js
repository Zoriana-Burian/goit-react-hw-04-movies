import { useEffect, useState } from "react";
import { useHistory, useParams, useLocation,  useRouteMatch} from "react-router-dom";
import * as fetchAPI from '../../servises/api-servises';



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
     <button type='button' onClick={goNextPage()}>← Go back</button>
      
             {movie && (
        <>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
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
    </>
  );
}

