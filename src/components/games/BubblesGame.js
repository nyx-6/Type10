import React from "react";
import '../../styles/components/BubblesGame.css'
import Modal from '../Modal'
import Bubble from "./Bubble";
import GameMusic from '../../statics/sounds/bubbles.mp3'
import LostBubbleSound from '../../statics/sounds/missedBubble.mp3'
import PopSound from '../../statics/sounds/pop.mp3'


class BubblesGame extends React.Component {

    state = {
        seconds: 60,
        score: 0,
        points: 0,
        isPopped: false,
        startGameModalIsOpend: false,
        endGameModalIsOpend: false,
        play: false,
        bubbles: [],
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
        this.setState({ startGameModalIsOpend: false });
        this.gameArea.current.focus();
    }

    handleOpenStartGameModal = async e => {
        await this.setState({ startGameModalIsOpend: true, })
    }

    handleCloseEndGameModal = e => {
        this.setState({ endGameModalIsOpend: false })
    }

    handleOpenEndGameModal = async e => {

        await this.setState({ endGameModalIsOpend: true, })
    }

    getRandomNumbers(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    getId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    getRandomColor() {
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

    createBubble() {
        let letter = String.fromCharCode(this.getRandomNumbers(65, 90));
        let colorLetter = this.getRandomColor();
        let id = this.getId();
        let position = Math.random() * window.innerWidth + "px";

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

        }, 700);

        this.intervalGame = setTimeout(() => {
            clearInterval(this.intervalGameTime);
            clearInterval(this.intervalGameBubbles);
            this.handleOpenEndGameModal();
            this.gameMusic.pause();
            this.gameMusic.currentTime = 0;
        }, 61000);
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
                    <p>¡Reto!</p>
                    <button className="Modal__container_button" onClick={this.handleStartGame}><span>Iniciar</span></button>
                </Modal>

                <div className="game__score_board">
                    <span className="game__score_board_text" >Tiempo: {this.state.seconds}s</span>
                    <span className="game__score_board_text" >Puntos: {this.state.score}</span>
                </div>

                <div className="game__area" tabIndex="0" ref={this.gameArea}
                     onKeyDown={this.handleKeyDown}
                >
                </div>

                <Modal
                    isOpen={this.state.endGameModalIsOpend}
                    onClose={this.handleCloseEndGameModal}
                >
                    <br />
                    <p>¡Terminaste!</p>
                    <button className="Modal__container_button" onClick={this.handleCloseEndGameModal}><span>Ok</span></button>
                </Modal>
            </div>
        )
    }
}

export default BubblesGame; 