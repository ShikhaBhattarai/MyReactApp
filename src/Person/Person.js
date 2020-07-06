import React from 'react';
// import './Person.css'
import styled from 'styled-components';

const StyledDiv = styled.div`
width: 60%;
margin: 20px auto;
border: 1px solid #eeeeee;
box-shadow: 0 2px 3px #ccc;
text-align: center;
padding:10px;
`

const person = (props) => {
    return (
        <StyledDiv>
        <div className="Person" >
        <p onClick={props.click}>I am {props.name}. I am {props.age} years old</p>
        <p>{props.children}</p>
        {/* Point changed prop to point some event listener or method which updates the state */}
        <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        </StyledDiv>
    )
}

export default person;
