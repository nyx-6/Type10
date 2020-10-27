import React from "react";
import "../styles/components/Level.css";
import Keyboard from './keyboard/Keyboard'
import ExerciseBox from './ExerciseBox'
import TextBox from './TextBox'
import Modal from './Modal'
import { Link } from 'react-router-dom';

class Level extends React.Component {

    state = {
        pressedKey: "",
        typedLetters: "",
        exercice: [],
        index: 0,
        currentExerciceLetter: "",
        score: 0,
        finalModalIsOpen: false,
        startModalIsOpen: false,
        outFocusModalIsOpen: false,
        outFocusModalIsEnable: false,
        timetaken: 0,
    }

    constructor(props) {
        super(props);

        let routeState;
        if (this.props.location.state) {
            localStorage.setItem('routeState', JSON.stringify(this.props.location.state))
            routeState = this.props.location.state
        } else {
            routeState = localStorage.getItem('routeState')
            if (routeState) routeState = JSON.parse(routeState)
        }

       
        this.keyboard = React.createRef();
        this.isDisabled = true;
        this.wordsNumber = 8;
        this.lettersByWord = 5;
        this.allowedLetters = routeState.letters;
        this.intervalGameId = 0;
        
    }

    componentDidMount() {
        this.generateExercice();
        this.handleOpenStartModal();
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

    handleCloseStartModal = e => {
        this.setState({ startModalIsOpen: false })
        this.setFocusOnKeyBoard();
    }
    handleOpenStartModal = async e => {
        await this.setState({
            startModalIsOpen: true,
            outFocusModalIsEnable: true
        })
    }
    handleCloseOutFocusModal = async e => {
        await this.setState({ outFocusModalIsOpen: false })
        this.setFocusOnKeyBoard();
    }
    handleOpenOutFocusModal = async e => {
        if (this.state.outFocusModalIsEnable) {
            await this.setState({ outFocusModalIsOpen: true })
        }
    }
    handleCloseFinalModal = e => {
        this.setState({ finalModalIsOpen: false })
    }
    handleOpenFinalModal = async e => {
        clearInterval(this.intervalGameId);
        await this.setState({
            finalModalIsOpen: true,
            outFocusModalIsEnable: false
        })
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
                this.handleOpenFinalModal();
            }
        }
    }

    handleStartGame = e => {
        this.handleCloseStartModal();
    
            this.intervalGameId = setInterval(() => {
                this.setState({
                    timetaken: this.state.timetaken + 1,
                })
            }, 1000)
    }

    getRandomNumbers(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    render() {
        return (
            <div className="level content_box">
                <Modal
                    isOpen={this.state.startModalIsOpen}
                    onClose={this.handleCloseStartModal}
                >
                    <div className="">

                        <h1>Iniciar</h1>


                        <div>
                            <button onClick={this.handleStartGame} className="">OK</button>
                            <Link to={'/exercises'}>Cancelar</Link>
                        </div>

                    </div>
                </Modal>
                <div className="content_box">
                    <div className="box"></div>
                    <div className="panel content_box">
                        <ExerciseBox
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
                            outFocus={this.handleOpenOutFocusModal}
                            isOpen={this.state.outFocusModalIsOpen}
                            onClose={this.handleCloseOutFocusModal}
                        />
                    </div>
                    <div className="box"></div>
                </div>
                <Modal
                    isOpen={this.state.finalModalIsOpen}
                    onClose={this.handleCloseFinalModal}
                >
                    <div className="">

                        <h1>Terminaste el ejercicio</h1>
                        <p>Este es tu puntaje:</p>

                        <h3>Puntos: { this.state.score }</h3>
                        <h3>Tiempo: { this.state.timetaken }</h3>
                        {/* <h3>PPM: 80</h3> */}

                        <p>Te recomendamos repetir el nivel</p>

                        <div>
                            <a href="/level">Repetir</a>
                            <Link to={'/exercises'}>Siguiente</Link>
                        </div>

                    </div>
                </Modal>
            </div>
        )
    }
}



export default Level;