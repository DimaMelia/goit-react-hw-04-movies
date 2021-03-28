import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import React, {lazy, Suspense}  from "react";

const HomePage = lazy(()=>import('./Components/HomePage/HomePage' /*webpackChunkName: "HomePage"*/));
const MoviesPage = lazy(()=> import('./Components/MoviesPage/MoviesPage' /*webpackChunkName: "MoviesPage"*/));
const MovieDetailsPage = lazy(()=>import('./Components/MovieDetailsPage/MovieDetailsPage' /*webpackChunkName: "MovieDetailsPage"*/))

//{movieId} = useParams(), {url}=useRouteMatch(),
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <hr />
      <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
      <Route exact path="/" component={HomePage}/>
        <Route path="/movies/:movieId" component={MovieDetailsPage}/>
        <Route path="/movies" component={MoviesPage}/>
        <Redirect to='/' />
      </Switch>
      </Suspense>
    </div>
  );
}

export default App;
