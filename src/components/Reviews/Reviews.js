import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as fetchAPI from '../../servises/api-servises';

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchAPI.fetchReviews(movieId).then(moviesRev => {
            setReviews(moviesRev.results)
        })
    }, [movieId])
    
    return (
         <>
      {(reviews.length && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )) || <p >We don't have any reviews for this movie.</p>}
    </>
    );
}