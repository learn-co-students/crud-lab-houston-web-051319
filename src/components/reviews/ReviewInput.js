import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state={
    text:''
  }

  handleOnChange = (e) =>{
    this.setState({
      text:e.target.value
    })
  }

  handleOnSubmit = (e) =>{
    e.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId });
    this.setState({
      text:''
    })

  }
  render() {
    return (
      <div>
        Review Input
        <form onSubmit={(e)=>this.handleOnSubmit(e)}>
          <label>Enter Review:</label>
          <input 
          type="text"
          value={this.state.text}
          onChange ={(e)=>this.handleOnChange(e)}
          />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
