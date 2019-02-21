import React, { Component } from 'react'

export default class FoodList extends Component {

  calcTotal =() => {
    const { todayFood } = this.props;
    console.log(todayFood);
    return todayFood.reduce((acc, food) => {
      return (parseInt(food.amount) * food.calories) + acc;
    },0)
  }
  
  render() {
    const { todayFood } = this.props;
  
    return (
      <div>
        <h1>Todays Foods</h1>
        {todayFood.map((food, index) => {
          
          return (
            <div key={index} style={{display:'flex'}}>
              <p>{food.amount}</p>
              <p> x </p>
              <p>{food.name}</p>
              <p> = </p>
              <p>{food.calories * parseInt(food.amount)}</p>
            </div>
          )
        })}
        <span><strong>Total Calories:</strong>  {this.calcTotal()} </span>
      </div>
    )
  }
}
