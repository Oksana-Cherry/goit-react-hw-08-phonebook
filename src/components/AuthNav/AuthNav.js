import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './AuthNav.module.css';
const { register, login } = routes;

const AuthNav = () => (
  <div>
    <NavLink
      to={register}
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Authorization
    </NavLink>
    <NavLink
      to={login}
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
