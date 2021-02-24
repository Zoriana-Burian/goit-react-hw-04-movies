//import logo from './logo.svg';
//import './App.css';
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/HomePage/HomePage";
import MoviesPage from "./components/MoviesPage/MoviesPage";
import Container from './components/Container/Container';
import NotFound from './components/NotFound/NotFound';

export default function App() {
  return (
    <Container>
      <Navigation/>
      <Switch>
        <Route path="/" exact>
      <HomePage />
    </Route>
    
    {/* <Route path="/movies">
      <MoviesPage/>
      </Route> */}
        
        <Route>
          <NotFound/>
        </Route>
       </Switch>
    
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
