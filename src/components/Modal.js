import React from "react";
import ReactDOM from "react-dom";

import '../styles/components/Modal.css'

function Modal(props) {
    if (!props.isOpen) {
        return null;
    }
    return (ReactDOM.createPortal(
        <div className="Modal">
            <div className="Modal__container">
                <div className="Modal__logo">
                    <span className="red">Type</span><span className="white">10</span>
                </div>
                <button onClick={props.onClose} className="Modal__close-button">
                    x
                </button>
                {props.children}
            </div>
        </div>,
        
        document.getElementById('modal')
    ))
}


export default Modal;