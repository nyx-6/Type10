import React from "react";
import "../styles/components/Level.css";
import Keyboard from './keyboard/Keyboard'
import Exercice from './Exercice'
import TextBox from './TextBox'


class Level extends React.Component {

    state = {
        pressedKey: "",
        typedLetters: "",
        exercice: [],
        index: 0,
        currentExerciceLetter: "",
        isWrong: false
    }

    constructor(props) {
        super(props);

        this.keyboard = React.createRef();
        this.isDisabled = true;
        this.wordsNumber = 8;
        this.lettersByWord = 5;
        this.allowedLetters = ['F', 'J'];
    }

    componentDidMount() {
        this.generateExercice();
        this.setFocusOnKeyBoard();
    }

    setFocusOnKeyBoard = () => {
        this.keyboard.current.focus();
        //console.log(document.activeElement);
    }

    generateExercice = () => {

        const max = this.allowedLetters.length - 1;
        const min = 0;
        let index = 0;
        let letter = "";
        let exercice = [];

        for (let w = 0; w < this.wordsNumber; w++) {
            for (let l = 0; l < this.lettersByWord; l++) {

                index = this.getRandomNumbers(min, max);
                letter = this.allowedLetters[index];
                exercice.push({ letter: letter, color: 'black' })
            }

        exercice.push({ letter: ' ', color: 'black' })
        }
        exercice.pop()

        this.setState({
            exercice
        })
    }

    handleKeyDown = e => {
        let letters = [...this.state.exercice];
   
        this.setState({
            pressedKey: e.key,
            typedLetters: this.state.typedLetters + e.key,
            currentExerciceLetter: letters[this.state.index].letter,
        });
    }

    handleKeyUp = e => {
        this.setState({
            pressedKey: "",
        });
        const isWrong = this.state.pressedKey !== this.state.currentExerciceLetter
        const exercise = [...this.state.exercice]
        exercise[this.state.index].color = isWrong ? 'red' : 'blue'
        this.setState({
            exercise,
            index: this.state.index + 1,
        })
    }

    getRandomNumbers(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    render() {

        return (
            <div className="Level ">
                <div className="content_box">
                    <div className="box"></div>
                    <div className="box">
                        <Exercice
                            exercice={this.state.exercice}
                            isWrong={this.state.isWrong}
                        />
                        <TextBox
                            disabledInputText={this.isDisabled}
                            typedLetters={this.state.typedLetters}
                        />
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