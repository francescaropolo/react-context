import React, { Component } from 'react';
import ListActivity from './components/ListActivity';
import ActivityService from './services/ActivityService';
import NavBar from './components/NavBar';
import './App.css';
import Cart from './components/Cart';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ActivityService>
          <NavBar />
          <Cart />
          <ListActivity/>
        </ActivityService>
      </div>
    );
  }
}

export default App;
