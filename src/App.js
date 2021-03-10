import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Container from './components/Container/Container';

const HomePage = lazy(() =>
  import('./components/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import(
    './components/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details" */
  ),
);
const NotFound = lazy(() =>
  import('./components/NotFound/NotFound' /* webpackChunkName: "not-found" */),
);

export default function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<h1>Завантаження...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
