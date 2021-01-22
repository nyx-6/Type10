import React from "react";
import Api from "../API.js"
import "../styles/components/Exercises.css"
import ExerciseInfo from "./ExerciseInfo";

class Exercises extends React.Component {
    render() {
        return (

            <div className="section">
                <div className="lessons__gallery">
                    {Api.map((info, l) =>
                        <React.Fragment key={l}>
                            <div className="lesson__header">
                                <span className="lesson__title">{info.lesson}</span>
                            </div>

                            <div className="lesson__exersices">
                                {info.exerciseList.map((info, i) =>
                                    <ExerciseInfo info={info} key={i} />
                                )}
                            </div>
                        </React.Fragment>
                    )}
                </div>
                <div className="circle11"></div>
                <div className="circle10"></div>
                <div className="circle12"></div>
                <div className="circle13"></div>
            </div>
        )
    }
}

export default Exercises;


