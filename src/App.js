import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';
//import HomePage from './pages/HomePage';
//import RegisterPage from './pages/RegisterPage';
//import LoginPage from './pages/LoginPage';
//import ContactsPage from './pages/ContactsPage';
import { connect } from 'react-redux';
//import Loader from 'react-loader-spinner';
//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
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
