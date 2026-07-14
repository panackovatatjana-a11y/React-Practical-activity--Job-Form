import React from 'react';
import Logo from "../assets/business-Logo.jpg";

import { AppForm }from './AppForm';


export const Header = () => {
  return (
    <header className="headertop">
      <img 
        src={Logo} 
        alt="IT Online Learning logo"
      />
      <a href="/">IT Online Learning</a>
      <AppForm />
      <h1>IT Online Learning</h1>
    </header>
  );
};

export default Header;