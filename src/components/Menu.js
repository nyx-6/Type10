import React from "react";
import { Link } from 'react-router-dom';
import '../styles/components/Menu.css';

function Menu() {
    return (

        <nav className="menu">
            <ul>
                <li className="menu__option"><Link to={'/boomgame'} className="menu__link">Bomba</Link></li>
                <li className="menu__option"><Link to={'/bubblesgame'} className="menu__link">Burbujas</Link></li>
                <li className="menu__option"><Link to={'/instructions'} className="menu__link">Instrucciones</Link></li>
                <li className="menu__option"><Link to={'/exercises'} className="menu__link">Ejercicios</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;
