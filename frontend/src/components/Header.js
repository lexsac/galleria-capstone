import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className="header">
            <div className = "header__logo">
                <Link to='/'>
                    <p>Logo</p>
                </Link>
            </div>

            <Navigation />
        </div>
    )
}

export default Header;