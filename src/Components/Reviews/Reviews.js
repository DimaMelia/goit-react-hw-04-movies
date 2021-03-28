import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../MoviesAPI/MoviesAPI";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then((r) => setReviews(r.results));
  }, [movieId]);

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <h4>Author: {review.author}</h4>
          <p>{review.content}</p>
        </li>
      ))}
      {reviews.length === 0 && (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
}

export default Reviews;
