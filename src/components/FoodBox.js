import React, { Component } from 'react'

export default class FoodBox extends Component {
  state = {
    amount: 0,
    food: this.props.food,
  }
  handleAmount = (e, amount) => {
    this.setState({
      amount: e.target.value,
      food: {
        quantity: amount,
      }
    })
    
  }
  handleClick = () => {
    const { amount, food } = this.state;
    const { name, calories} = this.props.food;
    const { addToList } = this.props;
    addToList({amount, name, calories, food});
    
  }
  render() {
    const { calories, image, name } = this.props.food;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number" 
                  value={this.state.amount}
                  onChange={(e) => {this.handleAmount(e,this.state.amount)}}
                />
              </div>
              <div className="control">
                <button 
                  className="button is-info"
                  onClick={this.handleClick}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}
