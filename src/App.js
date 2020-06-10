import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  // State is only available in Class based Component.
  state = {
    persons: [
      {name:'Max', age:20},
      {name:'Shikha',age:26},
      {name: 'John', age:99}],
      // otherState: 'Some value'
  }
  switchNameHandler = () => {
    //Dont do this: this.state.persons[0].name = 'PICHAUU'
    this.setState({
      persons:[
      {name:'Maxiii', age:20},
      {name:'Shikha',age:26},
      {name: 'John', age:99}
    ]})
  }
  render() {
    return (
      <div className="App">
       <h1>I am app</h1>
      <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
       <Person name ={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Racing</Person>
       <Person name= {this.state.persons[2].name} age = {this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
