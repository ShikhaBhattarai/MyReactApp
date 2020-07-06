import React from 'react';
// Wrap entire application in special component
import Radium from 'radium';
import './Person.css'

// function person() {}

const person = (props) => {
    const style= {
        
        '@media (min-width: 500px)': {
            width: '450px'
        }

    }

    return (
        <div className="Person" style={style}>
        <p onClick={props.click}>I am {props.name}. I am {props.age} years old</p>
        <p>{props.children}</p>
        {/* Point changed prop to point some event listener or method which updates the state */}
        <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Radium(person);
