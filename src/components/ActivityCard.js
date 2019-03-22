import React, { Component } from 'react'
import Button from './Button';

class ActivityCard extends Component {

  state = {
    isAdded: false,
  }

  handleClick = (id) => {
    if(!this.state.isAdded) {
      this.setState({
        isAdded: true
      })

      this.props.addToCart(id);
    }

  }

  render() {
    const { title, description, cover_image_url, retail_price, uuid } = this.props.activity;
    return (
      <>
        <div className="image-container">
          <img src={cover_image_url} alt={title}/>
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{retail_price.formatted_value}</span>
        <Button isAdded={this.state.isAdded} addToCart={() => this.handleClick(uuid)}/>
      </>
    )
  }
}

export default ActivityCard;