import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
//import styles from './AuthNav.module.css';
const { register, login } = routes;

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#2b32b2',
  },
};
const AuthNav = () => (
  <div>
    <NavLink
      to={register}
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Authorization
    </NavLink>
    <NavLink
      to={login}
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
