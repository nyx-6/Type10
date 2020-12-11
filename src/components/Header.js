import React from "react";
import '../styles/components/Header.css'
import Logo from "./Logo";
import Menu from "./Menu";


function Header() {
    return (
        <header className="Header">
            <Logo />
            <Menu />
        </header>
    );
}

export default Header;

