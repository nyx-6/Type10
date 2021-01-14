import React from "react";
import '../../styles/components/BubblesGame.css'
import Modal from '../Modal'
import Bubble from "./Bubble";
import GameMusic from '../../statics/sounds/bubbles.mp3'
import LostBubbleSound from '../../statics/sounds/missedBubble.mp3'
import PopSound from '../../statics/sounds/pop.mp3'
import { Link } from 'react-router-dom';


class BubblesGame extends React.Component {

    state = {
        seconds: 60,
        score: 0,
        points: 0,
        isPopped: false,
        startGameModalIsOpend: false,
        endGameModalIsOpend: false,
        outFocusModalIsOpen: false,
        outFocusModalIsEnable: false,
        play: false,
        bubbles: [],
        dificulty: 'easy',
    }

    constructor(props) {
        super(props);

        this.gameArea = React.createRef();
        this.intervalGameTime = 0;
        this.intervalGameBubbles = 0;
        this.intervalGame = 0;
        this.gameMusic = new Audio(GameMusic);
        this.lbubbleSound = new Audio(LostBubbleSound);
        this.popSound = new Audio(PopSound);
        this.popBubble = this.popBubble.bind(this);
        this.POINT = 1;
        this.challenge = 45;
        this.speed = 800;
        this.letters = ['F', 'J'];
        this.gameTime = 61000;
    }

    componentDidMount() {
        this.handleOpenStartGameModal();

    }

    componentWillUnmount() {
        clearInterval(this.intervalGame);
        clearInterval(this.intervalGameTime);
        clearInterval(this.intervalGameBubbles);
        this.gameMusic.pause();
    }

    handleCloseStartGameModal = e => {
        this.setGameConfig();
        this.setState({ startGameModalIsOpend: false });
        this.gameArea.current.focus();
    }

    handleOpenStartGameModal = async e => {
        await this.setState({
            startGameModalIsOpend: true,
            outFocusModalIsEnable: true
        })
    }

    handleCloseOutFocusGameModal = async e => {

        await this.setState({ outFocusModalIsOpen: false })
        this.gameArea.current.focus();
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
            outFocusModalIsEnable: false
        })
    }

    getRandomNumbers(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    setGameConfig() {
        switch (this.state.dificulty) {
            case 'easy':
                this.challenge = 45;
                this.speed = 800;
                this.letters = ['F', 'J'];
                break;
            case 'normal':
                this.challenge = 55;
                this.speed = 700;
                this.letters = ['A', 'S', 'D', 'F', 'J', 'K', 'L', 'Ñ'];
                break;
            case 'hard':
                this.challenge = 65;
                this.speed = 600;
                this.letters = ['A', 'S', 'D', 'F', 'J', 'K', 'L', 'Ñ', 'G', 'H'];
                break;
            default:
                this.challenge = 45;
                this.speed = 800;
                this.letters = ['F', 'J'];
                break;
        }

    }

    getId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    getRandomColor() {
        // var letters = 'BCDEF'.split('');
        // var color = '#';
        // for (var i = 0; i < 6; i++ ) {
        //     color += letters[Math.floor(Math.random() * letters.length)];
        // }
        // return color;
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    popBubble(id) {

        let bubbles = [...this.state.bubbles];
        let missedBubble = bubbles.find(bubble => bubble.key === id);

        let index = bubbles.indexOf(missedBubble);
        bubbles.splice(index, 1);

        this.setState({ bubbles: bubbles });
    }

    popAllBubbles() {
        let bubbles = [...this.state.bubbles];
        bubbles = [];
        this.setState({ bubbles: bubbles });
    }

    createBubble() {
        // let letter = String.fromCharCode(this.getRandomNumbers(65, 90));
        let letterIndex = this.getRandomNumbers(0, this.letters.length - 1);
        let letter = this.letters[letterIndex];
        let colorLetter = this.getRandomColor();
        let id = this.getId();
        let position = Math.random() * (window.innerWidth - 100) + "px";

        let bubble = <Bubble
            bubbleLetter={letter}
            isPopped={false}
            bubbleId={id}
            key={id}
            position={position}
            colorLetter={colorLetter}
            lostBubbleSound={this.lbubbleSound}
            popBubble={this.popBubble}
        />

        return bubble
    }

    handleOnChangeDificulty = e => {
        this.setState({
            dificulty: e.target.value,
        })
    }

    handleStartGame = () => {

        this.handleCloseStartGameModal();
        this.gameMusic.play();

        this.intervalGameTime = setInterval(() => {

            this.setState({
                seconds: this.state.seconds - 1
            })

        }, 1000);

        this.intervalGameBubbles = setInterval(() => {
            let bubbles = [...this.state.bubbles];
            let bubble = this.createBubble();
            bubbles.push(bubble);

            this.setState({
                bubbles: bubbles
            })

        }, this.speed);

        this.intervalGame = setTimeout(() => {
            clearInterval(this.intervalGameTime);
            clearInterval(this.intervalGameBubbles);
            console.log(this.state.bubbles);
            this.popAllBubbles();
            console.log(this.state.bubbles);
            this.handleOpenEndGameModal();
            this.gameMusic.pause();
            this.gameMusic.currentTime = 0;
        }, this.gameTime);
    }

    handleKeyDown = e => {

        let bubbles = [...this.state.bubbles];

        for (let i = 0; i < bubbles.length; i++) {
            let bubble = bubbles[i];

            if (bubble.props.bubbleLetter === e.key.toUpperCase()) {

                this.popBubble(bubble.props.bubbleId)
                this.popSound.play();
                this.setState({ score: this.state.score + this.POINT });
                break;
            }

        }
    }

    render() {

        return (

            <div className="game__section">
                {this.state.bubbles.map(bubble => bubble)}
                <Modal
                    isOpen={this.state.startGameModalIsOpend}
                    onClose={this.handleCloseStartGameModal}
                >
                    <br />
                    <h3>LLuvia de burbujas</h3>
                    <h4>¡Reto!</h4>
                    <p>
                        Rompe todas las burbujas que puedas en un minuto.
                        Presiona la tecla correspondiente a cada burbuja para romperla.
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

                    <button className="Modal__container_button" onClick={this.handleStartGame}><span>Iniciar</span></button>
                    <Link to={'/Type10'} className="link-unstyled Modal__container_button">Salir</Link>
                </Modal>

                <div className="game__score_board">

                    <span className="game__score_board_text" >Reto: {`${this.challenge} Burbujas`}</span>
                    <span className="game__score_board_text" >Tiempo: {this.state.seconds}s</span>
                    <span className="game__score_board_text" >Puntos: {this.state.score}</span>

                </div>

                <div className="game__area" tabIndex="0" ref={this.gameArea}
                    onKeyDown={this.handleKeyDown}
                    onBlur={this.handleOpenOutFocusGameModal}
                >
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
                            <Link to={'/Type10'} className="link-unstyled Modal__container_button">No</Link>
                        </div>

                    </div>
                </Modal>

                <Modal
                    isOpen={this.state.endGameModalIsOpend}
                    onClose={this.handleCloseEndGameModal}
                >
                    <br />
                    <h3>{this.state.score >= this.challenge ? "¡Reto cumplido!" : "Intenta de nuevo"}</h3>
                    <span>{`Puntaje: ${this.state.score} / ${this.challenge}`}</span>
                    <br />
                    <br />
                    {/* <button className="Modal__container_button" onClick={this.handleCloseEndGameModal}><span>Ok</span></button> */}
                    <Link to={'/Type10'} className="link-unstyled Modal__container_button">Salir</Link>
                    <a href="/bubblesgame" className="link-unstyled Modal__container_button">Repetir</a>

                </Modal>
            </div>
        )
    }
}

export default BubblesGame; 