import React from "react";
import { Link } from 'react-router-dom';

const Event = (props) => {
    return (
        <td className = {'Event ' + props.color}>
            <h3>{props.event}</h3>
            <h6>{props.location} </h6>
            {/* <h10> <br /> </h10> */}
            <h5>{props.date_time}</h5>
            <img src= {props.image} ></img>
            {/* <Link to={props.link}>
                <button className="my-button">Visit Website</button>
            </Link> */}
        </td>

    )
}

export default Event;
