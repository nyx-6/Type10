import React from "react";
import Api from "../API.js"
import { Link } from "react-router-dom";


class Exercises extends React.Component {
    render() {
        return (
            <div>
                {Api.map((exercise) =>
                    <Link to={{
                        pathname: './level',
                        state: {
                            letters: exercise.letters
                        },
                    }} >
                        <div key={exercise.exerciseId}>
                            <h2>{exercise.line}</h2>
                            <h4>Ejercicio {exercise.exerciseId}</h4>
                            <ul>
                                {exercise.letters.map((letter, i) => <li key={i}>{letter}</li>)}
                            </ul>
                        </div>
                    </Link>
                )}
            </div>
        )
    }
}


export default Exercises;