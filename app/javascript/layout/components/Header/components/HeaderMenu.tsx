import React from 'react';
import {navConfig} from '../config/nav-config';
import {RouterLink} from '../../../../shared/components/Link/Link';
import {useAuth} from '../../../../pages/hooks/useAuth';
import {loginAPI} from "../../../../app/api/api";
import Button from "../../../../shared/components/Button/Button";
import {ROUTES} from "../../../../app/router/router-config";

const HeaderMenu = () => {
    const {isAuth} = useAuth()
    const logoutAuth = async () => {
        try {
            let response = await loginAPI.logout()
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }
  const renderAuthLink = () => {
    if (isAuth) {
      return (
        <li
          className="header-menu__item"
        >
          <RouterLink url={ROUTES.adminPanel}>{"Admin Panel"}</RouterLink>
        </li>
      );
    } else {
        return (
            <li
                className="header-menu__item"
            >
                <RouterLink url={ROUTES.login}>{"Login"}</RouterLink>
            </li>
        );
    }
  };
  return (
    <nav className="header__menu header-menu">
        <ul className="header-menu__list">
            <li
                className="header-menu__item"
            >
                <RouterLink url={ROUTES.layout}>{"Home"}</RouterLink>
            </li>
            {renderAuthLink()}
            {
                isAuth && (
                    <li className="header-menu__item">
                        <Button onClick={logoutAuth}>Log out</Button>
                    </li>
                )
            }
        </ul>
    </nav>
  );
};

export default HeaderMenu;
