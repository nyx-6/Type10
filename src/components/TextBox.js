import React from "react";
import "../styles/components/TextBox.css";



function TextBox(props) {
    return (
        <input type="text" className="typing" disabled={props.disabledInputText} value={props.typedLetters}/>
    );
}


export default TextBox; 