import React from "react";

const Event = (props) => {
    return (
        <td className = {'Event ' + props.color}>
            <h3>{props.event}</h3>
            <h5>{props.location} </h5>
            <h5> <br /> </h5>
            <h5>{props.date_time}</h5>
            <img src= {props.image} ></img>
            {/* <p>{props.link}</p> */}
        </td>

    )
}

export default Event;
