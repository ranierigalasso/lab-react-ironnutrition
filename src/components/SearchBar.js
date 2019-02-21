import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = {
    search: '',
  }
  handleSearch =(e) => {
    this.setState({
      search: e.target.value,
    },() => {
      this.props.searchHandle(this.state.search);
    })
    console.log(this.state.search);
  }
  render() {
    const { search } = this.state;
    return (
      <div>
        <h2>Search for food</h2>
        <input 
          type="text" 
          placeholder="Search Food" 
          value={search}
          onChange={this.handleSearch}
        />
      </div>
    )
  }
}
