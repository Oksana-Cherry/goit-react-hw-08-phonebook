import React from 'react';
import { connect } from 'react-redux';
import PhoneImg from '../components/image/phone.png';
import styles from './Page.module.css';
/*const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    textAlign: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  homepageImage: {
    width: 300,
  },
};*/

const HomePage = ({ img }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Phonebook</h1>
    <img className={styles.homepage_image} src={img} alt="Phone" />
  </div>
);
const mapStateToProps = state => ({
  img: PhoneImg,
});
export default connect(mapStateToProps)(HomePage);
