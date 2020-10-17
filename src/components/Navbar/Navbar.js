import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navbar.scss';

function Navbar() {
    const [bars, setBars] = useState(false)

    function handleClick(){
        setBars(!bars)
    }

    return (
        <nav className="navbar">
            <h1 className="navbar__logo">Test Laravel</h1>
            <div className="navbar__icon" onClick={handleClick}>
                <FontAwesomeIcon className="navbar__bars" icon={bars ? faTimes : faBars} />
            </div>
            <ul className={bars ? 'navbar__menu--active' : 'navbar__menu'}>
                {MenuItems.map((item, index) => (
                    <li key={index}>
                        <Link className="navbar__link" to={item.url}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;