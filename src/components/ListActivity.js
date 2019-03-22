import React, { Component } from 'react';
import {withContext} from '../services/ActivityService';
import ActivityCard from './ActivityCard';

class ListActivity extends Component {

  renderList = () => {
    return this.props.activities.map((activity, index) => (
      <li key={index}>
        <ActivityCard activity={activity} addToCart={this.props.addToCart}/>
      </li>
    ))
  }

  render() {
    return (
      <>
        <ul className="list-container">
          {this.renderList()}
        </ul>
      </>
    )
  }
}

export default withContext(ListActivity);