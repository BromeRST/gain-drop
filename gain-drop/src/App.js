import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard';
import Profile from './components/profile';
import {Route, Link} from 'react-router-dom';
import { Router, browserHistory } from 'react-router';

function App() {
  return (
    <div className="App">
      <Router exact path="/" component={Dashboard} />
      <Router path="/profile" component={Profile} />
    </div>
  );
}

export default App;
