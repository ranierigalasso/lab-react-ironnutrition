import React, { Component } from 'react'

export default class NewFood extends Component {
  state = {
    foodName: '',
    foodCal: '',
    foodImg: '',
  }
  handleName = (e) => {
    this.setState({
      foodName: e.target.value,
    })
  }
  handleCal = (e) => {
    this.setState({
      foodCal: e.target.value,
    })
  }
  handleImg = (e) => {
    this.setState({
      foodImg: e.target.value,
    })
  }
  handleClick = () => {
    const {foodName, foodCal, foodImg } = this.state;
    const { addList } = this.props;
    addList( foodName, foodCal, foodImg );
    this.setState({
      foodName: '',
      foodCal: '',
      foodImg: '',
    })
  }
  render() {
    
    const {foodName, foodCal, foodImg } = this.state;
    
    return (
      <div>
        <h3>Add a Food</h3>
        <input type="text" value={foodName} placeholder="food name" onChange={this.handleName}/>
        <input type="text" value={foodCal} placeholder="food calories" onChange={this.handleCal}/>
        <input type="text" value={foodImg} placeholder="food imgUrl" onChange={this.handleImg}/>
        <button onClick={()=>{this.handleClick()}}>Add</button>        
      </div>
    )
  }
}
