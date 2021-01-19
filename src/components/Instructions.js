import React from "react";
import "../styles/components/Instructions.css";
import keyboard from "../statics/keyboard.png"
import colorKeyboard from "../statics/keyboard2.png"
import leftHand from "../statics/lefthand.png"
import rightHand from "../statics/righthand.png"


function Instructions() {
    return (
            <div className="Instructions">
                <div className="tier" >
                    
                   <span className="title">Antes de practicar...  </span>

                    <p className="text">
                        <span className="imgSubTitle">Verifica tu teclado</span>
                        <br /> <br />
                        Para practicar necesitas un teclado QWERTY y tener el idioma
                        predeterminado en español. Esto es importante ya que los ejercicios
                        incluyen la letra Ñ.
                    </p>

                    <span className="imgSubTitle">Teclado QWERTY-es</span>
                    <br /><br />
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
                <div className="tier" >
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
                    <br /><br />
                    <img src={colorKeyboard} className="image" alt="colorKeyboard"></img>
                    <div className="img_hands ">
                        <img src={leftHand} className="image" alt="leftHand"></img>
                        <img src={rightHand} className="image" alt="rightHand"></img>
                    </div>

                </div>
                <div className="tier" >

                <span className="imgSubTitle">Notas</span>
                <br />
                
                    <p className="text">
                        Type10 no cuenta con ejercicios para practicar
                        con las teclas del sistema.
                        Ese tipo de ejercicios serán agregados en futuras
                        versiones de Type10.
                    </p>
                    <span className="title">Listo, ¡Ahora puedes practicar!</span>

                </div>
            </div>
    );
}

export default Instructions;