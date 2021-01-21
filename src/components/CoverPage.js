import React from "react";
import "../styles/components/CoverPage.css";


function CoverPage() {
    return (
        <React.Fragment>
            <div className="cover__page">
                <div className="cover__page_box_left">
                    <span className="cover__page_title">Typing</span>
                    <span className="cover__page_title">Exercises</span>

                    <div className="cover__page_buttons_box">
                        <button className="cover__page_button_l">Login</button>
                        <button className="cover__page_button_s">Sing in</button>
                    </div>

                </div>
                <div className="cover__page_box_right">

                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>

                </div>
            </div>
            <div className="cover__page_about">
                <div className="cover__page_about_box">
                    <h1>What is it?</h1>
                    <p className="cover__page_about_text">
                        Type10 is a typing web app that will help you to
                    improve your typing speed and precision, using all your fingers.<br />
                    This app is perfect for everyone who wants to get a job
                    that requires good typing skills, students or just for personal growth.
                </p>
                </div>
                <div className="circle4"></div>
                <div className="circle5"></div>
            </div>
            <div className="cover__page_instructions">
                <span className="cover__page_tittle"> <h1>Instructions</h1></span>
               
                {/* <div className="cover__page_instructions_box">

                </div> */}
                <div className="circle6"></div>
                <div className="circle7"></div>
            </div>
        </React.Fragment>
    );
}

export default CoverPage;