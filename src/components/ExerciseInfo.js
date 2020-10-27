import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/ExerciseInfo.css"

function ExerciseInfo(props) {
    const exercise = props.info
    return (
            <Link
                to={{
                    pathname: './level',
                    state: {
                        letters: exercise.letters
                    },
                }}
                className="link-unstyled"
            >
                <div className="exercise__info content_box" key={exercise.exerciseId}>
                    <span className="exercise__title">Ejercicio {exercise.exerciseId}</span>
                    <ul className="content_box">
                        {exercise.letters.map((letter, i) =>
                            <li key={i} className="list-unstyled">{letter}</li>
                        )}
                    </ul>
                </div>
            </Link>
        
    )
}

export default ExerciseInfo;