import React, { Component } from 'react'
import { withContext } from '../services/ActivityService';

class NavBar extends Component {
  render() {
    console.log(this.props)
    return (
      <nav>
        <h1>BRAND</h1>
        <ul>
          <li>Cart: {this.props.cart.length}</li>
          <li>Favourite: {this.props.cart.length}</li>
        </ul>
      </nav>
    )
  }
}

export default withContext(NavBar);