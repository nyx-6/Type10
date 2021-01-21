import React, { useState } from "react";
import "../styles/components/CoverPage.css";
import colorKeyboard from "../statics/keyboard2.png"
import leftHand from "../statics/lefthand.png"
import rightHand from "../statics/righthand.png"

function CoverPage() {

    const [slide1, setSlide1] = useState('block');
    const [slide2, setSlide2] = useState('none');
    const [slide3, setSlide3] = useState('none');

    return (
        <React.Fragment>
            <div className="cover__page">
                <div className="cover__page_box_left">
                    <span className="cover__page_title">Type10</span>
                    <span className="cover__page_title">Mecanografía</span>

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
                    <h1>¿Qué es Type10?</h1>
                    <p className="cover__page_about_text">
                        Type10 es una aplicación web de mecanografía que te ayudará a
                         mejorar tu velocidad y precisión de escritura con todos los dedos.
                         Esta aplicación es perfecta para todos los que quieran conseguir un trabajo
                     que requiere buenas habilidades con el teclado, estudiantes o simplemente para crecimiento personal.
                </p>
                </div>
                <div className="circle4"></div>
                <div className="circle5"></div>
            </div>
            <div className="cover__page_instructions">
                <h1 className="cover__page_tittle">Instrucciones</h1>

                <div className="slider_button_box">
                    <button className="slider_button" onClick={() => {
                        setSlide1('block');
                        setSlide2('none');
                        setSlide3('none');
                    }}>1</button>
                    <button className="slider_button" onClick={() => {
                        setSlide1('none');
                        setSlide2('block');
                        setSlide3('none');
                    }}>2</button>
                    <button className="slider_button" onClick={() => {
                        setSlide1('none');
                        setSlide2('none');
                        setSlide3('block');
                    }}>3</button>
                </div>
                <div className="cover__page_instructions_sliderbox">
                    <div className="slide" style={{ display: slide1 }}>
                        <h2>Paso 1</h2>
                        <h4>Conoce la posición de las manos:</h4>
                        <p className="text">
                        Coloca el dedo índice de la mano derecha en la letra J y así
                        sucesivamente con el resto de los dedos hasta que el dedo
                        meñique de la mano derecha toque la tecla de la letra Ñ.
                     
                        De la misma forma, coloca el dedo índice de la mano izquierda
                        en la letra f y así hasta que el dedo meñique de la mano
                        izquierda toque la tecla de la letra A.
                    </p>
                        <br />
                        <img src={colorKeyboard} className="cover__page_instructions_image_keyboard" alt="colorKeyboard"></img>
                        <div className="cover__page_instructions_position_hands_box">
                            <img src={leftHand} className="cover__page_instructions_image_hands" alt="leftHand"></img>
                            <img src={rightHand} className="cover__page_instructions_image_hands" alt="rightHand"></img>
                        </div>

                    </div>
                    <div className="slide" style={{ display: slide2 }}>
                        <h2>Paso 2</h2>
                        <h4>Conoce los tipos de ejercicios:</h4>
                        <p className="text">
                            <span className="about__subTitle">Ejercicios básicos </span>
                            <br />
                            Estos ejercicios están diseñados para ubicar las teclas
                            sin mirar el teclado, con el objetivo de reducir el
                            tiempo de escritura y aumentar la concentración en el texto.
                        </p>

                        <p className="text">
                            <span className="about__subTitle">Retos </span>
                            <br />
                            Estos ejercicios son juegos que aparecen una vez que se finalize alguna
                            de las series de ejercicios básicos, para repasar lo aprendido
                            y reforzar un par de habilidades importantes como
                            lo son agilizar los dedos con los ejercicios contra
                            el tiempo y desarrollar la memoria muscular con los
                            ejercicios de memoria.
                            <br />
                            Para conocer mejor los tipos de retos puedes ver los demos en la opcion de menú
                            Juegos.
                        </p>
                    </div>
                    <div className="slide" style={{ display: slide3 }}>
                        <h2>Paso 3</h2>

                        <span className="about__subTitle">¡Ahora puedes comenzar a practicar!</span>

                        <p className="text">
                            Estas un paso más cerca de tus objetivos.
                        </p>

                    </div>
                </div>
                <div className="circle6"></div>
                <div className="circle7"></div>
            </div>
        </React.Fragment>
    );
}

export default CoverPage;