import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/ExerciseInfo.css"

function ExerciseInfo(props) {
    var exercise = props.info;

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
            <div className="exercise__box_info" key={exercise.id}>
                <div className="exercise__inner_box_info">
                    <span className="exercise__title"> {exercise.id}</span>
                    <ul>
                        {exercise.letters.map((letter, i) =>
                            <li key={i} className="list-unstyled">{letter}</li>
                        )}
                    </ul>
                </div>
            </div>
        </Link>
    )
}

export default ExerciseInfo;