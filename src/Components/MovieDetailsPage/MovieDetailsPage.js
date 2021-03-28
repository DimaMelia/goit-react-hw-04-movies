import { useEffect, useState } from "react";
import { useParams, Link, useRouteMatch, Route, useHistory, useLocation } from "react-router-dom";
import { getMovieDetails } from "../../MoviesAPI/MoviesAPI";
import Reviews from "../Reviews/Reviews";
import Cast from "../Cast/Cast";
import styles from './MovieDetails.module.css';

function MovieDetailsPage() {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then((r) => setMovie(r));
  }, [movieId]);

  const onGoBack = () => {history.push(location.state?.from || '/', {from: location})}

  return (
    <div>
        <button type='button' onClick={onGoBack} className={styles.goBackBtn}>Go Back</button>
      
      {movie && (
        <>
        <div className={styles.mainDetails}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt="Movie backdrop"
          />
          <div className={styles.detailsText}>
            <h2>
              {movie.title}({movie.release_date.slice(0, 4)})
            </h2>
            <p>User Score: {movie.vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{movie.genres.map((genre) => genre.name).join(" ")}</p>
          </div>
          </div>
          <div>
          <hr />
          <p>Additional information</p>
          <ul>
            <li>
              <Link to={`${url}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${url}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>
        </>
      )}
      <Route path={`/movies/:movieId/cast`}>
        <Cast />
      </Route>
      <Route path={`/movies/:movieId/reviews`}>
        <Reviews />
      </Route>
    </div>
  );
}

export default MovieDetailsPage;
