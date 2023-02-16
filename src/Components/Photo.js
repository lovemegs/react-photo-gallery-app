import React from "react";

// Handles individual photo
const Photo = (props) => {
    return (
        <li>
            <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt={props.alt} ></img>
        </li>
    )
}

export default Photo;