import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
// import logo from '../../public/assets/shared/logo.svg';
import '../styles/Header.css';


const Header = () => {
    return (
        <div className="header">
            <div className = "header__logo">
                <Link to='/'>
                    <h1>Hi</h1>
                    {/* <img src={logo} alt="Galleria" /> */}
                </Link>
            </div>

            <Navigation />
        </div>
    )
}

export default Header;