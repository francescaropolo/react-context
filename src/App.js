import React, { Component } from 'react';
import ListActivity from './components/ListActivity';
import ActivityService from './services/ActivityService';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="container">
        <ActivityService>
          <NavBar />
          <ListActivity/>
        </ActivityService>
      </div>
    );
  }
}

export default App;
