import React, { Component } from 'react'
import data from '../data/data.json'
const MyContext = React.createContext();

export const withContext = (Comp) => {
  return class WithContextConsumer extends Component {
    render() {
      return (
        <MyContext.Consumer>
          {(value) => (
            <Comp
              activities={value.activities}
              addToCart={value.addToCart}
              cart={value.cart}
              {...this.props}
            />
          )}
        </MyContext.Consumer>
      )
    }
  }
}

class ActivityService extends Component {
  state = {
    activities: [],
    cart: [],
    favourites: 0,
  }

  componentDidMount() {
    this.setState({
      activities: data,
    })
  }

  addToCart = (id) => {
    const {activities, cart} = this.state;
    const activityToCart = activities.find(item => item.uuid === id);
    this.setState({
      cart: [...cart, activityToCart]
    })
  }

  addToFavourites = (id) => {
    const { activities, favourites } = this.state;
    // const activityToFavourite = activities.find(item => item.uuid === id);
    // this.setState({
    //   cart: [...cart, activityToCart]
    // })
  }

  render() {
    return (
      <MyContext.Provider 
        value={{
          activities: this.state.activities,
          addToCart: this.addToCart,
          cart: this.state.cart,
        }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default ActivityService;