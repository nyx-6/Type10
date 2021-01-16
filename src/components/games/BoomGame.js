import React from "react";
import '../../styles/components/BoomGame.css'
import Modal from '../Modal'
import API from '../../API2.js'
import back1 from '../../statics/images/boomGame/wh1.png'
import back2 from '../../statics/images/boomGame/wh2.png'
import back3 from '../../statics/images/boomGame/wh3.png'
import back4 from '../../statics/images/boomGame/wh4.png'
import backExplosion from '../../statics/images/boomGame/explosion.png'
import beepSound from '../../statics/sounds/beep.mp3'
import gameMusic from '../../statics/sounds/tension.mp3'
import startGameSound from '../../statics/sounds/startsystem.mp3'
import explosionSound from '../../statics/sounds/explosion.mp3'
import foundObjective from '../../statics/sounds/foundit.mp3'
import correctSound from '../../statics/sounds/correct.mp3'
import wrongSound from '../../statics/sounds/wrong.mp3'
import winSound from '../../statics/sounds/win.mp3'
import { Link } from 'react-router-dom';


class BoomGame extends React.Component {

    state = {
        screen0: "screen__of",
        screen1: "screen__of",
        screen2: "screen__of",
        screen3: "screen__of",
        miniScreen: "screen__of",
        miniScreen1: "",
        miniScreen2: "",
        miniScreen3: "",
        miniScreen4: "",
        uiCam: "",
        dateTime: "",
        uiMiniCam: "hidden",
        objective: "",
        objectiveSystemTimer: "",
        objectiveSystemSeconds: 80,
        instructionsList: [],
        currentPassword: "",
        systemKeyBoard: "",
        userPasword: "",
        cursor: "",
        passwordCount: 0,
        locksList: [],
        connectionLost: "",
        startGameModalIsOpend: false,
        endGameModalIsOpend: false,
        outFocusModalIsOpen: false,
        outFocusModalIsEnable: false,
        dificulty: 'easy',
        finishOnTime: true,

    }

    constructor(props) {
        super(props)
        this.gameWrittingArea = React.createRef();
        this.beepSound = new Audio(beepSound);
        this.gameMusic = new Audio(gameMusic);
        this.startGameSound = new Audio(startGameSound);
        this.explosionSound = new Audio(explosionSound);
        this.foundObjective = new Audio(foundObjective);
        this.correctSound = new Audio(correctSound);
        this.wrongSound = new Audio(wrongSound);
        this.winSound = new Audio(winSound);
        this.setInstrutions = API;
        this.camTimerId = "";
        this.miniCamsId = "";
        this.wharehouseAreas = [back1, back2, back3, back4,]
        this.gameIntervalId = "";
        this.deviceSystem = "";
        this.objectiveSystemTimerIntervalId = "";
        this.passworsNumber = 4;
        this.keyLetters = ['F', 'J'];
        this.wordsNumber = 5;
        this.letterByWord = 4;
    }

    componentDidMount() {
        this.handleOpenStartGameModal();

    }

    componentWillUnmount() {
        clearInterval(this.gameIntervalId);
        clearInterval(this.objectiveSystemTimerIntervalId);
        clearTimeout(this.miniCamsId);
        clearTimeout(this.camTimerId);
        this.gameMusic.pause();
    }


    handleCloseStartGameModal = e => {
        this.setGameConfig();
        this.setState({ startGameModalIsOpend: false });
        this.startGame();
    }

    handleOpenStartGameModal = async e => {
        await this.setState({
            startGameModalIsOpend: true,
        });

    }

    handleCloseOutFocusGameModal = async e => {

        await this.setState({ outFocusModalIsOpen: false })
        this.gameWrittingArea.current.focus();
    }

    handleOpenOutFocusGameModal = async e => {
        if (this.state.outFocusModalIsEnable) {
            await this.setState({ outFocusModalIsOpen: true })
        }
    }


    handleCloseEndGameModal = e => {
        this.setState({ endGameModalIsOpend: false })
    }

    handleOpenEndGameModal = async e => {

        await this.setState({
            endGameModalIsOpend: true,
            outFocusModalIsEnable: false,
        })
    }

    startTime() {
        let today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();

        m = ('0' + m).slice(-2);
        s = ('0' + s).slice(-2);

        let time = h + ":" + m + ":" + s;

        this.camTimerId = setTimeout(() => {
            this.setState({
                dateTime: time
            })
            this.startTime()
        }, 500);
    }

    getRandomNumbers(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    getMinutes(seconds) {
        let m = Math.floor(seconds / 60);
        var s = seconds % 60;
        m = ('0' + m).slice(-2);
        s = ('0' + s).slice(-2);
        return m + ":" + s;
    }

    showMainCam() {
        this.setState({
            screen1: "screen1__on",
            uiCam: "CAM"
        })
        this.startTime();
    }
    showMiniCams() {

        this.setState({
            screen2: " screen2__on",
            miniScreen: "screen__on_mini",
            uiMiniCam: "visible",
        })
    }

    showRandomCams() {
        this.miniCamsId = setTimeout(() => {
            this.setState({
                miniScreen1: this.wharehouseAreas[this.getRandomNumbers(0, 3)],
                miniScreen2: this.wharehouseAreas[this.getRandomNumbers(0, 3)],
                miniScreen3: this.wharehouseAreas[this.getRandomNumbers(0, 3)],
                miniScreen4: this.wharehouseAreas[this.getRandomNumbers(0, 3)],
            })
            this.showRandomCams()
        }, 100);
    }

    showDevice() {
        clearTimeout(this.miniCamsId);
        this.setState({
            miniScreen1: this.wharehouseAreas[3],
            miniScreen2: this.wharehouseAreas[1],
            miniScreen3: this.wharehouseAreas[2],
            miniScreen4: this.wharehouseAreas[0],
            objective: "objective__found",
        })
        this.foundObjective.play();
    }
    showDeviceSystem() {
        let locksList = [...this.state.locksList];

        for (let i = 0; i < this.passworsNumber; i++) {
            locksList.push(this.getLock("lock"));
        }

        this.setState({
            screen3: "screen3__on",
            systemKeyBoard: "systemKeyBoard",
            cursor: "cursor",
            locksList: locksList,
            outFocusModalIsEnable: true,
        })
        this.gameWrittingArea.current.focus();
        this.deviceSystem = "K-B00N_9 SYSTEM";

        this.objectiveSystemTimerIntervalId = setInterval(() => {
            this.setState({
                objectiveSystemSeconds: this.state.objectiveSystemSeconds - 1,
                objectiveSystemTimer: "TIEMPO: " + this.getMinutes(this.state.objectiveSystemSeconds),
            })
            this.beepSound.play();
            if (this.state.objectiveSystemSeconds === -1) {
                this.explosionSound.play();
                clearInterval(this.objectiveSystemTimerIntervalId);
                clearTimeout(this.camTimerId);
                this.gameMusic.pause();
                this.setState({
                    screen1: "screen__explosion",
                    uiCam: "",
                    dateTime: "",
                    uiMiniCam: "",
                    objective: "",
                    miniScreen1: backExplosion,
                    miniScreen2: backExplosion,
                    miniScreen3: backExplosion,
                    miniScreen4: backExplosion,
                    objectiveSystemTimer: "",
                    deviceSystem: "",
                    screen3: "screen__of",
                    systemKeyBoard: "",
                    cursor: "",
                    connectionLost: "...Conexión perdida",
                    currentPassword: "",
                    finishOnTime: false,
                })
                setTimeout(() => {
                    this.handleOpenEndGameModal();
                }, 1000);
            }

        }, 1000);
    }

    generateExercise(min, max) {

        let currentPassword = "";

        for (let i = 0; i < this.wordsNumber; i++) {
            for (let x = 0; x < this.letterByWord; x++) {
                let letter = this.keyLetters[this.getRandomNumbers(min, max)];
                currentPassword = currentPassword + letter;
            }

            if (i < (this.wordsNumber - 1)) {
                let space = ' ';
                currentPassword = currentPassword + space;
            }
        }

        return currentPassword;
    }

    generatePassword() {
        let max = this.keyLetters.length - 1;
        let passwordNew = this.generateExercise(0, max);

        this.setState({
            currentPassword: "",
            passwordCount: this.state.passwordCount + 1,
            // eslint-disable-next-line
            currentPassword: passwordNew
        })
    }

    getInstruction(text) {
        return <span >{text}</span>
    }

    getLock(type_lock) {
        return <span className="material-icons">{type_lock}</span>
    }

    setGameConfig() {
        switch (this.state.dificulty) {
            case 'easy':
                this.passworsNumber = 4;
                this.keyLetters = ['F', 'J'];
                break;
            case 'normal':
                this.passworsNumber = 6;
                this.keyLetters = ['A', 'S', 'D', 'F', 'J', 'K', 'L', 'Ñ'];
                break;
            case 'hard':
                this.passworsNumber = 8;
                this.keyLetters = ['A', 'S', 'D', 'F', 'J', 'K', 'L', 'Ñ', 'G', 'H'];
                break;
            default:
                this.passworsNumber = 4;
                this.keyLetters = ['F', 'J'];
                break;
        }

    }

    handleOnChangeDificulty = e => {
        this.setState({
            dificulty: e.target.value,
        })
    }

    showInstructions = () => {

        for (let i = 0, promise = Promise.resolve(); i < this.setInstrutions.length; i++) {
            let element = this.setInstrutions[i];

            promise = promise.then(_ => new Promise(resolve => {

                let instructionsList = [...this.state.instructionsList]
                instructionsList.push(this.getInstruction(element.instruction));
                this.setState({ instructionsList: instructionsList })

                this.gameIntervalId = setTimeout(() => {

                    switch (element.action) {
                        case 1:
                            this.showMainCam();
                            break;
                        case 2:
                            this.showMiniCams();
                            this.showRandomCams();
                            break;
                        case 3:
                            this.showDevice();
                            break;
                        case 4:
                            this.showDeviceSystem();
                            break;
                        case 5:
                            this.generatePassword();
                            break;
                        default:
                            break;
                    }

                    resolve();
                }, 1000 * element.time)
            }
            ));
        }
    }

    handleKeyDown = e => {



        if (e.key.length === 1 && this.state.userPasword.length < 24) {
            this.setState({ userPasword: this.state.userPasword + e.key.toUpperCase() });
        }

        if (e.key === "Enter" && this.state.userPasword.length <= 24) {
            if (this.state.currentPassword === this.state.userPasword) {

                this.correctSound.play();
                let locksList = [...this.state.locksList];

                locksList.pop();
                locksList.unshift(this.getLock("lock"));
                locksList.shift();
                locksList.unshift(this.getLock("lock_open"));

                this.setState({ locksList: locksList });

                if (this.state.passwordCount < this.passworsNumber) {
                    this.generatePassword();
                }
                if (this.state.passwordCount === this.passworsNumber) {
                    clearInterval(this.objectiveSystemTimerIntervalId);
                    this.gameWrittingArea.current.blur();
                    this.gameMusic.pause();
                    this.setState({
                        objective: "",
                        currentPassword: "Misión Cumplida!!",
                        cursor: "",
                    });
                    this.winSound.play();
                    setTimeout(() => {
                        this.handleOpenEndGameModal();
                    }, 1000);

                }

            } else {
                this.wrongSound.play();
            }
            this.setState({ userPasword: "" })
        }

    }

    startGame = () => {
        this.startGameSound.play();
        this.gameMusic.play();
        this.setState({ screen0: "screen0__on" })
        this.showInstructions();
    }

    render() {
        return (
            <div className="gameArea"
                onBlur={this.handleOpenOutFocusGameModal}>
                <Modal
                    isOpen={this.state.startGameModalIsOpend}
                    onClose={this.handleCloseStartGameModal}
                >
                    <br />
                    <h3>Hacker hero</h3>
                    <h4>¡Reto!</h4>
                    <p>
                        Hackea a la bomba y salva a la ciudad.<br />
                        Ingresa todos los códigos de desactivación antes
                        de que se termine el tiempo.
                    </p>
                    <div className="bubblesGame__config">
                        <div className="bubblesGame__config_container">
                            <h4>Dificultad</h4>
                            <div>
                                <input type="radio" id="easy" name="dificulty" value="easy"
                                    onChange={this.handleOnChangeDificulty}
                                    checked={this.state.dificulty === "easy"} />
                                <label htmlFor="easy">Fácil</label><br />

                                <input type="radio" id="normal" name="dificulty" value="normal"
                                    onChange={this.handleOnChangeDificulty}
                                    checked={this.state.dificulty === "normal"} />
                                <label htmlFor="normal">Normal</label><br />

                                <input type="radio" id="hard" name="dificulty" value="hard"
                                    onChange={this.handleOnChangeDificulty}
                                    checked={this.state.dificulty === "hard"} />
                                <label htmlFor="hard">Difícil</label><br />
                            </div>
                        </div>
                        <div className="bubblesGame__config_container">
                            <h4>Linea Base</h4>
                            <span>ASDFG HJKLÑ</span>
                        </div>
                    </div>

                    <button className="Modal__container_button" onClick={this.handleCloseStartGameModal}><span>Iniciar</span></button>
                    <Link to={'/'} className="link-unstyled Modal__container_button">Salir</Link>

                </Modal>
                <div className={this.state.screen0}>
                    <div className="setInstuctions">
                        {this.state.instructionsList.map((instruction) => instruction)}
                        <span className="password">{this.state.currentPassword}</span>
                        <span className="connectionLost">{this.state.connectionLost}</span>
                    </div>
                </div>
                <div className={this.state.screen1}>
                    <span className="uiCam">{this.state.uiCam}</span>
                    <span className="uiCam">{this.state.dateTime}</span>
                </div>
                <div className={this.state.screen3}>
                    <div className="objectiveSytemInfo">
                        <span className="objectiveSystemTimer">{this.state.objectiveSystemTimer}</span>
                        <span className="deviceSystem">{this.deviceSystem}</span>
                    </div>
                    <div className="objectiveSystemArea">
                        <div className="objectiveSystemMessage">Presiona Enter para ingresar la clave</div>
                        <br />
                        <div className="locks">
                            {this.state.locksList.map(lock => lock)}
                        </div>
                        <div onKeyDown={this.handleKeyDown} className={this.state.systemKeyBoard} tabIndex="0" ref={this.gameWrittingArea}>
                            {this.state.userPasword}<span className={this.state.cursor}>_</span>
                        </div>
                    </div>
                </div>
                <div className={`${this.state.screen2}`}>
                    <div className={this.state.miniScreen} style={{ backgroundImage: `url(${this.state.miniScreen1})` }}>
                        <div className={this.state.objective}>
                            <span className="uiCam" style={{ visibility: this.state.uiMiniCam }}>{this.state.uiCam}</span>
                            <span className="uiCam" style={{ visibility: this.state.uiMiniCam }}>{this.state.dateTime}</span>
                        </div>
                    </div>
                    <div className={this.state.miniScreen} style={{ backgroundImage: `url(${this.state.miniScreen2})` }}>
                        <span className="uiCam" style={{ visibility: this.state.uiMiniCam }}>{this.state.uiCam}</span>
                        <span className="uiCam" style={{ visibility: this.state.uiMiniCam }}>{this.state.dateTime}</span>
                    </div>
                    <div className={this.state.miniScreen} style={{ backgroundImage: `url(${this.state.miniScreen3})` }}>
                        <span className="uiCam" style={{ visibility: this.state.uiMiniCam }}>{this.state.uiCam}</span>
                        <span className="uiCam" style={{ visibility: this.state.uiMiniCam }}>{this.state.dateTime}</span>
                    </div>
                    <div className={this.state.miniScreen} style={{ backgroundImage: `url(${this.state.miniScreen4})` }}>
                        <span className="uiCam" style={{ visibility: this.state.uiMiniCam }}>{this.state.uiCam}</span>
                        <span className="uiCam" style={{ visibility: this.state.uiMiniCam }}>{this.state.dateTime}</span>
                    </div>
                </div>

                <Modal
                    isOpen={this.state.outFocusModalIsOpen}
                    onClose={this.handleCloseOutFocusGameModal}
                >
                    <div className="">

                        <br />
                        <h3>¿Deseas continuar?</h3>


                        <div>
                            <button onClick={this.handleCloseOutFocusGameModal} className="Modal__container_button">Si</button>
                            <Link to={'/'} className="link-unstyled Modal__container_button">No</Link>
                        </div>

                    </div>
                </Modal>
                <Modal
                    isOpen={this.state.endGameModalIsOpend}
                    onClose={this.handleCloseEndGameModal}
                >
                    <br />
                    <h3>{this.state.finishOnTime ? "¡Reto cumplido!" : "Intenta de nuevo"}</h3>
                    {/* <span>{`Puntaje: ${this.state.score} / ${this.challenge}`}</span> */}
                    <br />
                    <br />
                    <Link to={'/'} className="link-unstyled Modal__container_button">Salir</Link>
                    <a href="/boomgame" className="link-unstyled Modal__container_button">Repetir</a>
                </Modal>
            </div>
        )
    }
}

export default BoomGame; 