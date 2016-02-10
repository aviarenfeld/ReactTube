import React, { Component } from 'react';

// each class base or smart component has state.
// create a new instance and the constructor is called
class SearchBar extends Component {
	constructor(props) {
		super(props);
    //initialize a new object and assign to this.state
    //this sets the state to an empty string.
		this.state = { term: '' };
	}

  // this component renders creates new input element
  // with a passed props onChange
  // the input value is set to retrieve its value
  // from this.state.term. When a user enters text the state is updated.
  // The value of the input has NOT changed, the event handler has been called with a ne value.
  // When the function is called again the value of the input is visable
  // the user does not change input value they triggered an event that causes the value to change.
  // when maniupluating state outside the class constructor above
  // use this.setState and never reset this.state
  render () {
  	return (
  		<div>
  	    <input
  	     // adding this value makes this a controlled component
  	     // set by state. its value only changes when state changes
  	     value={this.state.term}
  	     onChange={event => this.setState({ term: event.target.value })} />
  	  </div>
  	);
  }
}



//when input changes, run the code inside onInputChange
//the code bellow was refractored using the fat arrow statement above
  //onInputChange(event) {
    //console.log(event.target.value)
  //}
//}

export default SearchBar;
