import React from 'react';
import HeaderMenu from './components/HeaderMenu';
import HeaderLogo from './components/HeaderLogo';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__body">
          <HeaderLogo />
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
