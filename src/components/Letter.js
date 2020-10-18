import React from "react";
import "../styles/components/Letter.css";


function Letter(props) {

    return (
        <span className={`letter ${props.color}`}>{props.letter}</span>
    );
}


export default Letter;