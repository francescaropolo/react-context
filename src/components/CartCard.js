import React, { Component } from 'react'

class CartCard extends Component {

  handleRemove = (id) => {
    this.props.removeFromCart(id);
  }

  render() {
    return (
      <>
        <div>
          <img src={this.props.activity.cover_image_url} alt={this.props.activity.title}/>
        </div>
        <h3>{this.props.activity.title}</h3>
        <span>{this.props.activity.retail_price.formatted_value}</span>
        <button onClick={() => this.handleRemove(this.props.activity.uuid)}>Remove</button>
      </>
    )
  }
}

export default CartCard;