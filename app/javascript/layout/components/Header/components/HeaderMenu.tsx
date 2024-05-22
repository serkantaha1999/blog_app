import React from 'react';
import {RouterLink} from '../../../../shared/components/Link/Link';
import Button from '../../../../shared/components/Button/Button';
import {ROUTES} from '../../../../app/router/router-config';
import {useAuth} from "../../../../shared/context/AuthContext";

const AuthLink = () => {
    const { isAuth } = useAuth();
    const authLink = isAuth ? ROUTES.adminPanel : ROUTES.login;
    const linkText = isAuth ? 'Admin Panel' : 'Login';

    return (
        <li className="header-menu__item">
            <RouterLink url={authLink}>{linkText}</RouterLink>
        </li>
    );
};

const HeaderMenu = () => {
    const {isAuth, logout} = useAuth()
  return (
    <nav className="header__menu header-menu">
      <ul className="header-menu__list">
        <li className="header-menu__item">
          <RouterLink url={ROUTES.layout}>{'Home'}</RouterLink>
        </li>
        <AuthLink/>
        {isAuth && (
          <li className="header-menu__item">
            <Button onClick={logout}>Log out</Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default HeaderMenu;
