import React from 'react';

// function person() {}

const person = (props) => {
    return (
        <div>
        <p onClick={props.click}>I am {props.name}. I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange= {props.changed}/>
        </div>
    )
}

export default person;
