import React from 'react';
import Landing2 from './screens/Landing/Landing';
import Budget2 from './screens/Budget/Budget';
import Guests2 from './screens/Guests/Guests';
import Stuff2 from './screens/Stuff/Stuff';
// import Calender2 from './screens/Calender/Calender';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        {/* <ul>
        <li>
            <Link to="/">Landing</Link>
          </li>
          <li>
            <Link to="/Guests">Guests</Link>
          </li>
          <li>
            <Link to="/Calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/Budget">Budget</Link>
          </li>
          <li>
            <Link to="/staff">staff</Link>
          </li>
        </ul> */}

        <hr />

        <Switch>
        <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/Guests">
            <Guests />
          </Route>
          <Route exact path="/Calender">
            <Calender />
          </Route>
          <Route path="/Budget">
            <Budget />
          </Route>
          <Route path="/Stuff">
            <Stuff />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Landing() {
  return (
  <Landing2/>
  );
}
function Guests() {
  return (
   <Guests2/>
  );
}

function Calender() {
  return (
   <Calender/>
  );
}

function Budget() {
  return (
   <Budget2/>
  );
}

function Stuff() {
  return (
    <Stuff2/>
  );
}

export default App;
