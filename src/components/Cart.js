import React, { Component } from 'react'
import { withContext } from '../services/ActivityService';
import CartCard from './CartCard';

class Cart extends Component {

  handleRemove = (id) => {
    this.props.removeFromCart(id)
  }

  render () {
      return (
        <section>
          <ul>
            {this.props.cart.map((activity, index) => (
              <li key={index}><CartCard activity={activity} removeFromCart={this.handleRemove}/></li>
            ))}
          </ul>
        </section>
      )
  }
}

export default withContext(Cart);
