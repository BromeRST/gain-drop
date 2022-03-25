import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './components/dashboard';
import Profile from './components/profile';
import {BrowserRouter} from 'react-router-dom';
import { Router, BrowserHistory } from 'react-router';
import {Route, Link} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById('root')
);

// routing is not working

// ReactDOM.render(
//   <Router history={BrowserHistory}> 
//       <Route exact path="/" component={Dashboard} /> 
//   </Router>,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();