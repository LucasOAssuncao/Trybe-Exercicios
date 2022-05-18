import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import pokemons from './data';
import Pokedex from './Pokedex';
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <ul>
        <li>
          <Link to="/">Pokedex</Link>
        </li>
        <li>
          <Link to="/about">sobre</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={ () => <Pokedex pokemons={ pokemons } /> } />
        <Route path="/about" component={ About } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
