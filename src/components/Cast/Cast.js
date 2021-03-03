import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as fetchAPI from '../../servises/api-servises';

export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState('');

    useEffect(() => {
        fetchAPI.fetchCast(movieId).then(moviesCast => {
            setCast(moviesCast.cast)
        })
    }, [movieId])
    
    return (
        <>
      {(cast.length && (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                  width="200"
                  alt={actor.name}
                />
              )}
              <h3>{actor.name}</h3>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )) || (
        <p>The resource you requested could not be found.</p>
      )}
    </>
    )

}