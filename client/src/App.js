import React from 'react';
import Landing from './screens/Landing/Landing';
import Budget from './screens/Budget/Budget';
import Guests from './screens/Guests/Guests';
import Stuff from './screens/Stuff/Stuff';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/Guests">
          <Guests />
        </Route>
        <Route path="/Budget">
          <Budget />
        </Route>
        <Route path="/Stuff">
          <Stuff />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
