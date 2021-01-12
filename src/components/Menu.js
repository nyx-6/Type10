import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Menu.css';

function Menu() {

    const [subMenuVisibility, setSubMenuVisibility] = useState('hidden');

    return (

        <nav className="menu">
            <ul className="menu__main_menu">
                <li className="menu__option" onMouseEnter={() => { setSubMenuVisibility('visible') }}>
                    <a href="#" className="menu__link">Juegos</a>
                    <ul className="menu__submenu" style={{ visibility: subMenuVisibility }}
                        onMouseLeave={() => { setSubMenuVisibility('hidden') }}>
                        <li><Link to={'/boomgame'} className="menu__link">Hacker Hero</Link></li>
                        <li><Link to={'/bubblesgame'} className="menu__link">Lluvia de burbujas</Link></li>
                    </ul>
                </li>
                <li className="menu__option"><Link to={'/instructions'} className="menu__link">Instrucciones</Link></li>
                <li className="menu__option"><Link to={'/exercises'} className="menu__link">Ejercicios</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;
