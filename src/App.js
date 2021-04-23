import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';
import { connect } from 'react-redux';
//import { contactsSelectors, contactsOperations } from './redux/contacts';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import routes from './routes';
const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

const { home, contacts, register, login } = routes;
class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <PublicRoute exact path={home} component={HomePage} />
            <PublicRoute
              path={register}
              restricted
              redirectTo={contacts}
              component={RegisterPage}
            />
            <PublicRoute
              exact
              path={login}
              restricted
              redirectTo={contacts}
              component={LoginPage}
            />
            <PrivateRoute
              path={contacts}
              component={ContactsPage}
              redirectTo={login}
            />
            <PublicRoute component={HomePage} />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
