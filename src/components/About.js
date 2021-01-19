import React from "react";
import "../styles/components/About.css";



function About() {
    return (

        <div className="About">
            <div className="tier">
                <span className="title">¿Qué es Type10?</span>

                <p className="text">
                    Type10 es una aplicación web que te ayudará a sacarle
                    el máximo provecho a tu teclado a través de ejercicios
                    de mecanografía que te ayudarán a escribir usando todos
                    los dedos.
                    Estos ejercicios están diseñados para que te familiarices
                    con el teclado y puedas escribir eficientemente mirando
                    solo la pantalla.
                </p>
                <span className="title">Descripción de los ejercicios</span>

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
                    Estos ejercicios aparecen una vez que se finalize alguna
                    de las series de ejercicios básicos, para repasar lo aprendido
                    y reforzar un par de habilidades importantes como
                    lo son agilizar los dedos con los ejercicios contra
                    el tiempo y desarrollar la memoria muscular con los
                    ejercicios de memoria.
                </p>
            </div>

            <div className="tier">

            </div>

        </div>
    );
}

export default About;