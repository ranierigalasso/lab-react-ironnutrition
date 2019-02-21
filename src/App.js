import React, { Component } from 'react';
import FoodBox from './components/FoodBox';
import NewFood from './components/NewFood';
import SearchBar from './components/SearchBar';
import FoodList from './components/FoodList';
import foodsApi from './data/foods.json'
import 'bulma/css/bulma.css';


let foodList = [];
foodsApi.map((food) => {
  foodList.push(food);
});

class App extends Component {
  
  state = {
    foods: foodList,
    addedFoods: [],
    todayFoods:[],
    amount: 0,
  }

  addList = (foodName, foodCal, foodImg) => {
    const { foods, addedFoods } = this.state;
    const newFood = {
      name: foodName,
      calories: foodCal,
      image: foodImg,
    }
    const newFoods = [...foods, newFood];
    const newAddedFoods = [...addedFoods,newFood];
    this.setState({
      foods: newFoods,
      addedFoods: newAddedFoods,
    })
  }
  searchHandle = (search) => {
    const { addedFoods } = this.state;
    const newFoods = [];
    let originaList =[...foodsApi,...addedFoods]

    originaList.map((food) => {
      const foodItem = food.name.toLowerCase();
      if(foodItem.includes(search.toLowerCase())) {
        newFoods.push(food);
        this.setState({
          foods: newFoods,
      })
      } 
    }) 
  }

  addTodayList = (food) => {
    console.log(food)
    const {todayFoods} = this.state;
    const newTodayFoods = [...todayFoods, food];

    this.setState({
      todayFoods: newTodayFoods,
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchHandle={this.searchHandle}/>
        <NewFood addList={this.addList} />
        <div style={{display: 'flex'}}>
          <div>
            {this.state.foods.map((food, index) => {
              return <FoodBox 
                addToList={this.addTodayList}
                key={index} 
                food={food}
              />
            })}
          </div>
          <div>
            <FoodList 
              amount={this.state.amount}
              todayFood={this.state.todayFoods}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
