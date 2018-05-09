import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigate from './components/navigationbar'
import Signup from './components/signup'
import Help from './components/help'

import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div >
      <Navigate/>
      <div>
      <Help/>
      </div>
      </div>
    );
  }
}

export default App;
