import React from "react";
import '../../styles/components/Bubble.css'

class Bubble extends React.Component {

    onAnimationStart = e => {

     

    };

    onAnimationEnd = e => {
        this.props.popBubble(this.props.bubbleId);
        this.props.lostBubbleSound.play();
    };

    render() {
        return (

            <div className="bubble" key={this.bubbleId} style={{ left: this.props.position }}
                onAnimationStart={this.onAnimationStart}
                onAnimationEnd={this.onAnimationEnd}
            >
                <span className="bubble__letter" style={{ color: this.props.colorLetter }}>
                    {this.props.bubbleLetter}
                </span>
            </div>
        )
    }
}

export default Bubble;