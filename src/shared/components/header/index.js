import React, { Component, PropTypes } from 'react'
import Container from '../container';
import Logo from '../logo';
import Button from '../button';
import styles from './style.css';
import { connect } from 'react-redux';
import { logout } from '../../state/user/actions';

class HeaderComponent extends Component {
  render () {
    return (
      <header className={styles.header}>
        <Container>
          <a className={styles.logo} href="/">
            <Logo />
          </a>
          <button onClick={this.props.onLogout}>Logout</button>
        </Container>
      </header>
    );
  }
}

HeaderComponent.propTypes = {
  onLogout: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(logout())
    }
  }
}

const Header = connect(
  null,
  mapDispatchToProps
)(HeaderComponent)

export default Header
