import React from "react";
import "../styles/components/TextBox.css";



function TextBox(props) {
    return (
        <textarea className="typing" disabled={props.disabledInputText} value={props.typedLetters}/>
    );
}


export default TextBox; 