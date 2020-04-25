import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';

// const Link =()=>(
//   <div className="header"> 
//   <h1>ToDo List</h1>
//   <NavLink activeClassName="selected" to='/home'>Home </NavLink> |
//   <NavLink activeClassName="selected" to='/about'>About Us </NavLink>
//   </div>
// );

const RouterComponent =()=>(
  <Router>
    <Route exact path="/" component={LoginComponent}></Route>
    <Route exact path="/login" component={LoginComponent}></Route>
    <Route exact path="/home" component={HomeComponent}></Route>
    <Route exact path="/register" component={RegisterComponent}></Route>
    <Route exact path="/about" component={AboutComponent}></Route>
  </Router>
);

ReactDOM.render(
    <RouterComponent />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
