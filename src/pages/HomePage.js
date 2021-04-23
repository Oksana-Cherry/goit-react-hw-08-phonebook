import React from 'react';
import { connect } from 'react-redux';
import PhoneImg from '../components/image/phone.png';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomePage = ({ img }) => (
  <div style={styles.container}>
    <h1 style={styles.title}>Phonebook</h1>
    <img className="homepage-image" src={img} alt="Phone" />
  </div>
);
const mapStateToProps = state => ({
  img: PhoneImg,
});
export default connect(mapStateToProps)(HomePage);
