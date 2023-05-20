import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
    return (
        <>
            <nav>
                <ul>
                    <NavLink to="/">
                        <li className="navigation__item | link-1">
                            Start slideshow
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;