import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Timer} from './Components/Timer';

class App extends Component {
  render() {
    return (
        <div>
          <Timer name={"Vasya"}/>
          <Timer name={"Petya"}/>
        </div>
    );
  }
}

export default App;
