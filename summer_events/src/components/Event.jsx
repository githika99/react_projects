import React from "react";

const Event = (props) => {
    const handleClick = () => {
        window.location.href = props.link;
    };

      
    return (
        <td className = {'Event ' + props.color}>
            <h3>{props.event}</h3>
            <h6>{props.location} </h6>
            {/* <h10> <br /> </h10> */}
            <h5>{props.date}</h5>
            <h5>{props.time}</h5>
            <img src= {props.image} ></img>
            <button className="my-button" onClick={handleClick}>Visit Website</button>
         
            
        </td>

    )
}

export default Event;
