import { useEffect, useState } from "react";
import { Link, Route, useHistory, useLocation, useParams, useRouteMatch, withRouter } from "react-router-dom";
import { searchMovies } from "../../MoviesAPI/MoviesAPI";
import queryString from 'query-string';


function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const [searchQuery, setQuery] = useState('' || queryString.parse(location.search)?.query);
  const [movies, setMovies] = useState();
  const { url } = useRouteMatch();

  useEffect(() => {    
    if (location.search === '') return;
    searchMovies(searchQuery).then((r) => setMovies(r.results));
  }, [location.search])

  const onSearch = (e) => {
    e.preventDefault();
    // if (searchQuery) {
    //   alert("Enter search query");
    //   return;
    // }
    history.push({
      ...location,
      search: `query=${searchQuery}`
    });
    searchMovies(searchQuery).then((r) => setMovies(r.results));
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search movie"
          value={searchQuery}
          onChange={(e) => setQuery(e.target.value)}
        />

          <button type="submit">Search</button>

      </form>
      <Route path={`${url}`}>
        <ul>
          {movies &&
            movies.map((movie) => (
              <li key={movie.id}>
                <Link to={{pathname: `/movies/${movie.id}`, state: {from: location}}}>{movie.title}</Link>
              </li>
            ))}
        </ul>
      </Route>
    </div>
  );
}

export default withRouter(MoviesPage);
