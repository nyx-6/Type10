import React from "react";
import "../styles/components/Level.css";
import Keyboard from './keyboard/Keyboard'
import Exercice from './Exercice'


class Level extends React.Component {

    state = {
        //isPressed: false,
        pressedKey: ""
    }

    constructor(props) {
        super(props);

        this.keyboard = React.createRef();
        this.focusKeyBoard = this.setFocusOnKeyBoard.bind(this);
        this.isDisabled = true;
    }

    componentDidMount() {
        this.setFocusOnKeyBoard();
    }

    setFocusOnKeyBoard = () => {
        this.keyboard.current.focus();
        console.log(document.activeElement);
    }

    handleChangeText = e => {

    }

    handleKeyDown = e => {
        this.setState({
            pressedKey: e.key,
        });

        console.log("keydown");
        console.log(this.state.pressedKey);
    }

    handleKeyUp = e => {
        console.log("keyup");
        this.setState({
            pressedKey: "",
        });
    }

    render() {

        return (
            <div className="Level ">
                <div className="content_box">
                    <div className="box"></div>
                    <div className="box">
                        <Exercice disabledInputText={this.isDisabled} />
                        <Keyboard
                            keyboardRef={this.keyboard}
                            keyDown={this.handleKeyDown}
                            keyUp={this.handleKeyUp}
                            pressedKey={this.state.pressedKey}
                        />
                    </div>
                    <div className="box"></div>
                </div>
            </div>
        )
    }
}



export default Level;