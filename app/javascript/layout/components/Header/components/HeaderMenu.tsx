import React from 'react';
import {navConfig} from '../config/nav-config';
import {RouterLink} from '../../../../shared/components/Link/Link';
import {useAuth} from '../../../../pages/hooks/useAuth';
import {loginAPI} from "../../../../app/api/api";
import Button from "../../../../shared/components/Button/Button";

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
  return (
    <nav className="header__menu header-menu">
        <ul className="header-menu__list">
            {navConfig.map((link) => (
                <li
                    key={link.url}
                    className="header-menu__item"
                >
                    <RouterLink url={link.url}>{link.text}</RouterLink>
                </li>
            ))}
            <li
                className="header-menu__item"
            >
                {isAuth && <Button onClick={logoutAuth}>Log out</Button>}
            </li>
        </ul>
    </nav>
  );
};

export default HeaderMenu;
