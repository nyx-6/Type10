import React from "react";
import Api from "../API.js"
import "../styles/components/Exercises.css"
import ExerciseInfo from "./ExerciseInfo";

class Exercises extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="section content_box">
                    <div className="lesson ">
                        <div className="lesson__title_header content_box">
                            <span className="lesson__title">Línea Base</span>
                        </div>
                        <div className="gallery content_box">
                            {Api.map((info) =>
                                <ExerciseInfo info={info}/>
                            )}
                        </div>

                    </div>
                </section>

            </React.Fragment>
        )
    }
}

export default Exercises;