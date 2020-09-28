import React from "react";
import "../styles/components/Start.css";
import keyboard from "../statics/keyboard.png"
import colorKeyboard from "../statics/keyboard2.png"
import leftHand from "../statics/lefthand.png"
import rightHand from "../statics/righthand.png"


function Start() {
    return (
        <div className="Start">
            <div className="content_box">
                <div className="tier content_box">
                    <span className="title">¿Qué es Type10?</span>

                    <p className="text">
                        Type10 provee ejercicios que te ayudarán a
                        escribir usando todos los dedos, estos ejercicios
                        están diseñados para que te familiarices con el
                        teclado y puedas escribir eficientemente sin mirar el teclado.
                    </p>


                    <span className="title">Antes de practicar...  </span>

                    <p className="text">
                        <span className="subTitle">Verifica tu teclado</span>
                        <br />
                        Existen muchos tipos de teclados, pero en Type10,
                        por el momento, solo es posible practicar con un
                        teclado QWERTY en español. Este teclado incluye
                        la letra Ñ.
                    </p>

                    <span className="imgSubTitle">Teclado QWERTY-es</span>

                    <img src={keyboard} className="image" alt="keyboard"></img>

                    <p className="text">
                        El siguiente paso, es conocer la posición de
                        las manos y las teclas que debes presionar con cada
                        dedo.
                        <br />
                        Todos los teclados poseen un par
                        de relieves en las teclas F y J, estos relieves
                        son utilizados como referencia para indicar como
                        deben colocarse las manos en la línea base del teclado
                        sin necesidad de ver.
                    </p>

                </div>
                <div className="tier content_box">
                    <span className="title">Posición de las manos</span>

                    <p className="text">
                        Coloca el dedo índice de la mano derecha en la letra J y así
                        sucesivamente con el resto de los dedos hasta que el dedo
                        meñique de la mano derecha toque la tecla de la letra Ñ.
                        <br />
                        De la misma forma, coloca el dedo índice de la mano izquierda
                        en la letra f y así hasta que el dedo meñique de la mano
                        izquierda toque la tecla de la letra A.
                    </p>

                    <span className="imgSubTitle">Alcance de los dedos en el teclado</span>

                    <img src={colorKeyboard} className="image" alt="colorKeyboard"></img>
                    <div className="img_hands content_box">
                        <img src={leftHand} className="image" alt="leftHand"></img>
                        <img src={rightHand} className="image" alt="rightHand"></img>
                    </div>

                </div>
                <div className="tier content_box">
                    <span className="title">Descripción de los ejercicios</span>

                    <p className="text">
                        <span className="subTitle">Ejercicios básicos </span>
                        <br />
                        Estos ejercicios están diseñados para ubicar las teclas
                        sin mirar el teclado, con el objetivo de reducir el
                        tiempo de escritura y aumentar la concentración en el texto.
                    </p>



                    <p className="text">
                        <span className="subTitle">Retos </span>
                        <br />
                        Estos ejercicios aparecen una vez que se finalize alguna
                        de las series de ejercicios básicos, para repasar lo aprendido
                        y reforzar un par de habilidades importantes como
                        lo son agilizar los dedos con los ejercicios contra
                        el tiempo y desarrollar la memoria muscular con los
                        ejercicios de memoria.
                    </p>
                    <span className="imgSubTitle">Notas</span>
                    <p className="text">
                        Si cuentas con un teclado QWERTY-us, puedes utilizarlo,
                        solo asegúrate de que el idioma en tu computadora
                        sea español y encontraras la letra Ñ en la
                        tecla donde se encuentra la tecla ;.
                    </p>
                    <p className="text">
                        Type10 no cuenta con ejercicios para practicar
                        con las teclas del sistema. (Esto es temporal).
                    </p>
                    <span className="title">Listo, ¡Ahora puedes practicar!</span>

                </div>
            </div>
        </div>
    );
}

export default Start;