//import logo from './logo.svg';
//import './App.css';
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
// import HomePage from "./components/HomePage/HomePage";
// import MoviesPage from "./components/MoviesPage/MoviesPage";
import Container from './components/Container/Container';
// import NotFound from './components/NotFound/NotFound';
// import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';

const HomePage = lazy(() => import('./components/HomePage/HomePage' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */));
const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details" */));
const NotFound = lazy(() => import('./components/NotFound/NotFound' /* webpackChunkName: "not-found" */));

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
      <MoviesPage/>
      </Route>
        
      <Route path="/movies/:movieId">
      <MovieDetailsPage/>
        </Route>
        
        <Route>
          <NotFound/>
        </Route>
       </Switch>
      </Suspense>
     
    
   </Container>
   
  )
  // (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

// export default App;
