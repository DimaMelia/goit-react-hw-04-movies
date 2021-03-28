import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { trendingToday } from "../../MoviesAPI/MoviesAPI";

export default function HomePage() {
  
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    trendingToday().then((r) =>
      setMovies(
        r.results.map((result) => ({ title: result.title, id: result.id }))
      )
    );
  }, []);

  return (
    <>
      <h2>Trending today</h2>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={{pathname: `/movies/${movie.id}`, state:{from: location}}}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
