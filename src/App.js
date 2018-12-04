// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import SignUp from './SignUp'
import React, { Component } from 'react';
import './App.css';
import CocktailsContainer from './CocktailsContainer'
import { Route } from 'react-router-dom'
import CocktailForm from './CocktailForm'

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/CocktailsContainer" component={CocktailsContainer} />
      </div>
    );
  }
}


export default App