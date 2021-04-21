import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar/AppBar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import { connect } from 'react-redux';

//import Loader from 'react-loader-spinner';
//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
//import { contactsSelectors, contactsOperations } from './redux/contacts';
import { authOperations } from './redux/auth';
class App extends Component {
  /*componentDidMount() {
    this.props.fetchContact();
  }*/
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/contacts" component={ContactsPage} />
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
/*render() {
    return (
      <>
        <h1>Phonebook</h1>

        <ContactForm />

        <h2>Contacts</h2>

        <Filter />

        <ContactList />
        {this.props.isLoading && (
          <Loader
            type="ThreeDots"
            color="#303f9f"
            height={80}
            width={80}
            className="Loader"
          />
        )}
        {this.props.error && <h1>No result found!</h1>}
      </>
    );
  }
}*/

/*const mapStateToProps = state => ({
  isLoading: contactsSelectors.getLoding(state),
  error: contactsSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(contactsOperations.fetchContact()),
});*/

//export default connect(mapStateToProps, mapDispatchToProps)(App);
