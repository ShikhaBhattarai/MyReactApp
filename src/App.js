import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

// useState Hook
//Hooks start with use
const app = props => { 
     //array desctructuring
    const [personsState, setPersonsState] = useState({
      persons: [
        {name:'Max', age:20},
        {name:'Shikha',age:26},
        {name: 'John', age:99}],
        otherState: 'Some value'
    });



    const [otherState, setOtherState] = useState('Test');
    console.log(personsState, otherState);

    // Nested Function
    const switchNameHandler = () => {
      setPersonsState({
        persons:[
        {name:'Maxiii', age:20},
        {name:'Shikha',age:26},
        {name: 'John', age:99}
      ]
      // otherState: personsState.otherState
    })
    };

    return (
      <div className="App">
       <h1>I am app</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
       <Person name ={personsState.persons[1].name} age={personsState.persons[1].age}> My Hobbies: Racing</Person>
       <Person name= {personsState.persons[2].name} age = {personsState.persons[2].age}></Person>
      </div>
    );
}



export default app;
