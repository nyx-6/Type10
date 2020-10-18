import React from "react";
import "../styles/components/Exercice.css";
import Letter from "./Letter";


function Exercice(props) {

    return (

        <div className="Exercice">
            {props.exercice.map((obj, index) => < Letter key={index} letter={obj.letter} color={obj.color} />)}
        </div>

    );
}

export default Exercice;