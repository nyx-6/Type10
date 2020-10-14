import React from "react";
import "../styles/components/Exercice.css";

function Exercice(props) {
    return (
        <div>
            <div className="panel">
                <p className="exercice"></p>
            </div>
            <input type="text" className="typing" disabled={props.disabledInputText}/>
        </div>
    );
}

export default Exercice;