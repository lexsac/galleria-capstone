import React from 'react';
import SlideshowButton from './SlideshowButton'; 
import '../styles/Header.css';

const Header = () => {
    return (
      <div className="header">
        <img src="/assets/shared/logo.svg" width="113" height="32"></img>
        <SlideshowButton />
      </div>
    );
  };

export default Header;