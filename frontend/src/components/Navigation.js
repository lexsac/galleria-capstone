import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const handleNavLinkClick = () => {
        setIsOpen(false);
    };

    const combinedNavClassName = `navigation ${isOpen ? 'open' : ''}`;
    const combinedBtnClassName = `navigation__btn-toggle ${isOpen ? 'open' : ''}`;
    const combinedListClassName = `navigation__items ${isOpen ? 'open' : ''}`;

    return (
        <>
            <nav className={combinedNavClassName}>
                <ul className={combinedListClassName}>
                    <NavLink to="/" onClick={handleNavLinkClick}>
                        <li className="navigation__item">
                            Start slideshow
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;