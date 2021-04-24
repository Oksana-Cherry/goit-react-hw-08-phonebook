import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import routes from '../../routes';
import styles from './Navigation.module.css';
const { home, contacts } = routes;

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink
      to={home}
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to={contacts}
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Phonebook
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
