import React from "react";
import "../styles/components/ExerciseBox.css";
import Letter from "./Letter";


function ExerciseBox(props) {
    return (

        <div className="ExerciseBox">
            {props.exercice.map((obj, index) => < Letter key={index} letter={obj.letter} color={obj.color} />)}
        </div>

    );
}

export default ExerciseBox;