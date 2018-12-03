import React, { Component } from 'react';
import './App.css';
// import NavBar from './NavBar';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import SignUp from './SignUp'
import CocktailsContainer from './CocktailsContainer'
import CocktailDisplay from './CocktailDisplay';

class App extends Component {
  render() {
    return (
      <div>
          <CocktailsContainer />
      </div>
    );
  }
}


export default App