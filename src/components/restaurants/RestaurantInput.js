import React, { Component } from 'react';

class RestaurantInput extends Component {

  state={
    text:""
  }

  handleOnChange = (e) =>{
    this.setState({
      text:e.target.value
    })
  }

  handleOnSubmit =(e)=>{
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    });

  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={(e)=>this.handleOnSubmit(e)}>
          <label>Enter Restaurant Name:</label>
          <input 
          type="text" 
          onChange={(e)=>this.handleOnChange(e)}
          value ={this.state.text}
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
