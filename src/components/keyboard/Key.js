import React from "react";
import '../../styles/components/Key.css'

function Key(props) {

    return (
        <div className={props.pressedKeyValue === props.keyValue? "pressed key" : "regular key"}>
            <span className="value">{props.keyValue}</span>
        </div>
    );
}

function SystemKey(props) {

    return (
        <div className={props.pressedKeyValue === props.keyValue? "pressed system key" : "regular system key"}>
            <span className="value">{props.keyValue}</span>
        </div>
    );
}

function SpaceKey(props) {

    return (
        <div className={props.pressedKeyValue === props.keyValue? "pressed space key" : "regular space key"}>
            <span className="value">{props.keyValue}</span>
        </div>
    );
}

export { Key, SystemKey, SpaceKey }; 