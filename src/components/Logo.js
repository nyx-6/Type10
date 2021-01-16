import React from "react";
import '../styles/components/Logo.css'

import { Link } from 'react-router-dom';


function Logo() {
    return (
        // <li >
            <Link to={'/'} className=" logo">
                <span className="red">Type</span>
                <span className="white">10</span>
            </Link>
        // </li>
    );
}

export default Logo;

