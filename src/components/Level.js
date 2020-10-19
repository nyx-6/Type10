import React from "react";
import "../styles/components/Level.css";
import Keyboard from './keyboard/Keyboard'
import Exercice from './Exercice'
import TextBox from './TextBox'
import Modal from './Modal'


class Level extends React.Component {

    state = {
        pressedKey: "",
        typedLetters: "",
        exercice: [],
        index: 0,
        currentExerciceLetter: "",
        score: 0,
        modalIsOpen: false,
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
                exercice.push({ letter: letter, color: 'current' })
            }

            exercice.push({ letter: ' ', color: 'current' })
        }
        exercice.pop()

        this.setState({
            exercice
        })
    }

    handleCloseModal = e => {
        this.setState({ modalIsOpen: false })
    }
    handleOpenModal = async e => {
        await this.setState({ modalIsOpen: true })
        console.log("Score", this.state.score);
        console.log("modal", this.state.modalIsOpen);
    }

    handleKeyDown = e => {
        if (this.state.index < this.state.exercice.length) {
            let letters = [...this.state.exercice];

            this.setState({
                pressedKey: e.key,
                typedLetters: this.state.typedLetters + e.key,
                currentExerciceLetter: letters[this.state.index].letter,
            });
        }
    }

    handleKeyUp = e => {
        this.setState({
            pressedKey: "",
        });

        if (this.state.index < this.state.exercice.length) {

            const exercise = [...this.state.exercice]
            const isWrong = this.state.pressedKey !== this.state.currentExerciceLetter

            exercise[this.state.index].color = isWrong ? 'wrong' : 'ok'
            const point = isWrong ? 0 : 1

            this.setState({
                exercise,
                index: this.state.index + 1,
                score: this.state.score + point,
            })

            if (this.state.index === this.state.exercice.length - 1) {
                this.handleOpenModal();
            }
        }
    }

    getRandomNumbers(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    render() {
        return (
            <div className="Level ">
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onClose={this.handleCloseModal}
                >
                    <div className="">
                        <h1>Score: {this.state.score}</h1>
                        <p>You are about to delete this badge</p>

                        <div>
                            <button onClick={this.handleCloseModal} className="">OK</button>
                        </div>

                    </div>
                </Modal>
                <div className="content_box">
                    <div className="box"></div>
                    <div className="box">
                        <Exercice
                            exercice={this.state.exercice}
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