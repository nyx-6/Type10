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
        totalLetters: 0,
        index: 0,
        currentExerciceLetter: "",
        score: 0,
        finalModalIsOpen: false,
        startModalIsOpen: false,
        outFocusModalIsOpen: false,
        outFocusModalIsEnable: false,
        takenTime: 0,
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
        this.startExercise = React.createRef();

        this.isDisabled = true;
        this.wordsNumber = 24;
        this.lettersByWord = 5;
        this.allowedLetters = routeState.letters;
        this.intervalGameId = 0;
        this.accuracy = 0;
        this.wpm = 0;
        this.productivity = 0;
        this.score = 0;
        this.typingLevel = "none";
        this.exerciseStatus = "notStarted";
    }
    componentDidMount() {
        this.generateExercice();
        this.handleOpenStartModal();
    }
    componentWillUnmount() {
        clearInterval(this.intervalGameId);
    }
    setFocusOnKeyBoard = () => {
        this.keyboard.current.focus();
        //console.log(document.activeElement);
    }
    setFocusOnstartExerciseButton = () => {
        this.startExercise.current.focus();
        console.log(document.activeElement);
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
            exercice,
            totalLetters: exercice.length
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
        this.setFocusOnstartExerciseButton();
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
        this.calculateAccuracy();
        this.calculateWPM();
        this.calculateProductivity();
        this.calculateTypingLevel();
        await this.setState({
            finalModalIsOpen: true,
            outFocusModalIsEnable: false
        })
    }
    handleKeyDown = e => {
        if (this.state.index < this.state.exercice.length) {
            if (e.key.length === 1) {
                let letters = [...this.state.exercice];

                this.setState({
                    pressedKey: e.key,
                    typedLetters: this.state.typedLetters + e.key,
                    currentExerciceLetter: letters[this.state.index].letter,
                });
            }
        }
    }
    handleKeyUp = e => {
        this.setState({
            pressedKey: "",
        });

        if (this.state.index < this.state.exercice.length) {
            if (e.key.length === 1) {
                const exercise = [...this.state.exercice]
                const isWrong = this.state.pressedKey !== this.state.currentExerciceLetter

                exercise[this.state.index].color = isWrong ? 'wrong' : 'ok'
                const point = isWrong ? 0 : 1

                this.score = this.score + point;

                this.setState({
                    exercise,
                    index: this.state.index + 1,
                })

                if (this.state.index === this.state.exercice.length - 1) {
                    this.handleOpenFinalModal();
                }
            }
        }
    }
    handleStartGame = e => {
        this.handleCloseStartModal();

        this.exerciseStatus = "unfinished";


        this.intervalGameId = setInterval(() => {
            this.setState({
                takenTime: this.state.takenTime + 1,
            })
        }, 1000)
    }
    getRandomNumbers(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    calculateAccuracy() {
        console.log(`score ${this.score} total Letters ${this.state.totalLetters}`);
        this.accuracy = ((this.score / this.state.totalLetters) * 100).toFixed(2);
    }
    calculateWPM() {
        console.log(`s ${this.state.takenTime} m ${this.state.takenTime / 60}`);
        this.wpm = Math.round((this.state.totalLetters / 5) / (this.state.takenTime / 60));
    }
    calculateProductivity() {

        const errors = (this.score) / 5;
        const m = this.state.takenTime / 60;
        console.log(errors);
        this.productivity = Math.round(errors / m);
    }

    calculateTypingLevel() {

        let exerciseStatus = "unfinished";

        if (this.wpm <= 35 || this.accuracy < 93) {
            this.typingLevel = "Principiante"
            exerciseStatus = "repeat"
        } else
            if (this.wpm >= 36 && this.wpm <= 45) {
                this.typingLevel = "Intermedio"
                exerciseStatus = "goodenough"
            } else
                if (this.wpm >= 46 && this.wpm <= 65) {
                    this.typingLevel = "Avanzado"
                    exerciseStatus = "finished"
                } else
                    if (this.wpm > 65) {
                        this.typingLevel = "Legendario"
                        exerciseStatus = "finished"
                    }

        this.exerciseStatus = exerciseStatus
    }

    render() {

        return (
            <div className="level content_box">
                <Modal
                    isOpen={this.state.startModalIsOpen}
                    onClose={this.handleCloseStartModal}
                >
                    <div className="">
                        <br/>
                        <h2 className="modal__title">Ejercicio <span className="red">1</span></h2>
                       
                        <p className="text">Dato1: blablal   Dato2: jsdcjksbdjc  Dato3: jsdhjshd </p>
                        
                        <br/>
                        <div className="modal__start_level_text">¡Presiona <span className="modal__highlight_text">espacio</span> para comenzar!</div>
                        
                        <br/>
                        <br/>
                        <div>
                            <button  
                                ref={this.startExercise}
                                onClick={this.handleStartGame}
                                className="Modal__container_button">
                                Comenzar
                            </button>
                            <Link to={'/exercises'} className="link-unstyled Modal__container_button">Regresar</Link>
                        </div>

                    </div>
                </Modal>
                <div className="content_box">
                    <div className="box"></div>
                    <div className="panel box">

                        <div className="panel__upside">
                            <div className="boxy">
                            <ExerciseBox
                                exercice={this.state.exercice}
                            />
                            <TextBox
                                disabledInputText={this.isDisabled}
                                typedLetters={this.state.typedLetters}
                            />

                          </div>
                        </div>
                        <div className="panel__downside">
                        <div className="boxy">
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
                        </div>
                    </div>
                    <div className="box"></div>
                </div>
                <Modal
                    isOpen={this.state.finalModalIsOpen}
                    onClose={this.handleCloseFinalModal}
                >
                    <div className="">
                        <br/>
                        <h1 className="modal__title">¡Terminaste!</h1>
                        <h3 className="modal__title">Estadísticas:</h3>

                        <h5 className="modal__title">Time: {this.state.takenTime} </h5>
                        <h5 className="modal__title">Precisión: {this.accuracy}% </h5>
                        <h5 className="modal__title">Velocidad: {this.wpm} PPM</h5>
                        <h5 className="modal__title">Nivel: {this.typingLevel}</h5>

                        {this.wpm < 36 || this.accuracy < 96 ?
                            <p className="text">Te recomendamos repetir el nivel para mejorar tu precisión y velocidad</p> :

                            (this.wpm > 36 && this.wpm < 46) || this.accuracy < 96 ?
                                <p className="text"> Puedes seguir practicando para alcanzar el nivel avanzado
                                    o pasar al siguiente ejercicio</p> :
                                <p className="text">Ya dominas este ejercicio puedes pasar al siguiente ejercicio</p>
                        }
                            <br/>
                        {
                            this.exerciseStatus === "repeat" ?
                                <div>
                                    <a href="/level" className="link-unstyled Modal__container_button">Repetir</a>
                                    <Link to={'/exercises'} className="link-unstyled Modal__container_button">Regresar</Link>
                                </div> : this.exerciseStatus === "goodenough" ?
                                    <div>
                                        <a href="/level" className="link-unstyled Modal__container_button">Repetir</a>
                                        <Link to={'/exercises'} className="link-unstyled Modal__container_button">Siguiente</Link>
                                        <Link to={'/exercises'} className="link-unstyled Modal__container_button">Regresar</Link>
                                    </div> : this.exerciseStatus === "finished" ?
                                        <div>
                                            <Link to={'/exercises'} className="link-unstyled Modal__container_button">Siguiente</Link>
                                            <Link to={'/exercises'} className="link-unstyled Modal__container_button">Regresar</Link>
                                        </div> : <Link to={'/exercises'} className="">Regresar</Link>
                        }

                    </div>
                </Modal>
            </div >
        )
    }
}



export default Level;