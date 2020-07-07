import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: '121212', name: 'Max', age: 28 },
      { id: '12121', name: 'Manu', age: 29 },
      { id: '2121212', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPerson: false
  };

  deletePersonHandler = (personIndex) => {
    //Immutable by copying the original array
    const persons = this.state.persons.slice();
    //Alternate 
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event , id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    })
    
    const person = {
      ...this.state.persons[personIndex]};

    // const person = Object.assign({}, this.state.person[personIndex]); 

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState( {persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }

  render() {

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index)=> {
            //returns new array
            return <Person 
              name={person.name} 
              age={person.age}
              click ={() => {this.deletePersonHandler(index)}}
              key= {person.id} 
              changed = {(event) => this.nameChangedHandler(event, person.id)}/>
          })}

        </div>
      )
      // style.backgroundColor = 'red'
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    // let classes = ['red', 'bold'].join(' ');
    const classes= [];
    if (this.state.persons.length <= 2){
      classes.push('red'); //classes = ['red]
    }

    if (this.state.persons.length <=1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }
    

    return (
      //StyleRoot is used with radium

      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>

        <StyledButton alt={this.state.showPerson} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton>

        {persons}
      </div>
     
    )
  }
}

export default App;
