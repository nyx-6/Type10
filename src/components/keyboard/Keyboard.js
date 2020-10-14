import React from "react";
import '../../styles/components/Keyboard.css'
import Line from './Line'
import { Key, SystemKey, SpaceKey } from './Key'

function Keyboard (props) {
    
        return (
            <div className="keyboard" tabIndex="0"
                ref={props.keyboardRef}
                onKeyDown={props.keyDown}
                onKeyUp={props.keyUp}
            >
                <Line>
                    <Key keyValue=""  />
                    <Key keyValue="1" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="2" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="3" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="4" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="5" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="6" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="7" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="8" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="9" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="0" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue=" " pressedKeyValue={props.pressedKey}/>
                    <SystemKey keyValue="<--" />
                </Line>
                <Line>
                    <SystemKey keyValue="Tab" />
                    <Key keyValue="Q" />
                    <Key keyValue="W" />
                    <Key keyValue="E" />
                    <Key keyValue="R" />
                    <Key keyValue="T" />
                    <Key keyValue="Y" />
                    <Key keyValue="U" />
                    <Key keyValue="I" />
                    <Key keyValue="O" />
                    <Key keyValue="P" />
                    <Key keyValue="´" />
                    <Key keyValue=" " />
                    <Key keyValue=" " />
                </Line>
                <Line>
                    <SystemKey keyValue="Máyus" />
                    <Key keyValue="A" />
                    <Key keyValue="S" />
                    <Key keyValue="D" />
                    <Key keyValue="F" />
                    <Key keyValue="G" />
                    <Key keyValue="H" />
                    <Key keyValue="J" />
                    <Key keyValue="K" />
                    <Key keyValue="L" />
                    <Key keyValue="Ñ" />
                    <Key keyValue=" " />
                    <SystemKey keyValue="<┐" />
                </Line>
                <Line>
                    <Key keyValue="shift" />
                    <Key keyValue="> <" />
                    <Key keyValue="Z" />
                    <Key keyValue="X" />
                    <Key keyValue="C" />
                    <Key keyValue="V" />
                    <Key keyValue="B" />
                    <Key keyValue="N" />
                    <Key keyValue="M" />
                    <Key keyValue="," />
                    <Key keyValue="." />
                    <Key keyValue="-" />
                    <SystemKey keyValue="shift" />
                </Line>
                <Line>
                    <SystemKey keyValue="ctrl" />
                    <Key keyValue=" " />
                    <Key keyValue="alt" />
                    <SpaceKey keyValue=" " />
                    <Key keyValue="alt" />
                    <Key keyValue="" />
                    <SystemKey keyValue="ctrl" />
                </Line>
            </div>
        );
}

export default Keyboard;