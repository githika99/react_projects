import React from 'react';
import { useState } from 'react'


const Card = (props) => {

    const [display, setDisplay] = useState(props.side1); //initally on side 1

    function handleClick2(){ //make this a parameter value
        console.log("card flipped, handleClick2");
        setDisplay(prevDisplay => {
            return prevDisplay === props.side1 ? props.side2 : props.side1;
          });
      }
    

    return (
        <div className = 'FlashCard' onClick = {handleClick2}>
            <h2>{display}</h2>
        </div>

    )
}

export default Card;
