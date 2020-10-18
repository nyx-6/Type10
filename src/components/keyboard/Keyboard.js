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
                    <Key keyValue=" " />
                    <SystemKey keyValue="<--" />
                </Line>
                <Line>
                    <SystemKey keyValue="Tab" />
                    <Key keyValue="Q" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="W" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="E" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="R" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="T" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="Y" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="U" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="I" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="O" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="P" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="´" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue=" " />
                    <Key keyValue=" " />
                </Line>
                <Line>
                    <SystemKey keyValue="Máyus" />
                    <Key keyValue="A" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="S" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="D" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="F" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="G" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="H" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="J" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="K" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="L" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="Ñ" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue=" " />
                    <SystemKey keyValue="<┐" />
                </Line>
                <Line>
                    <Key keyValue="shift" />
                    <Key keyValue="> <" />
                    <Key keyValue="Z" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="X" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="C" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="V" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="B" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="N" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="M" pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="," pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="." pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="-" pressedKeyValue={props.pressedKey}/>
                    <SystemKey keyValue="shift" />
                </Line>
                <Line>
                    <SystemKey keyValue="ctrl" />
                    <Key keyValue=" " />
                    <Key keyValue="alt" />
                    <SpaceKey keyValue=" " pressedKeyValue={props.pressedKey}/>
                    <Key keyValue="alt" />
                    <Key keyValue="" />
                    <SystemKey keyValue="ctrl" />
                </Line>
            </div>
        );
}

export default Keyboard;