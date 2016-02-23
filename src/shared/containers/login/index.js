import React, { Component, PropTypes } from 'react'
import Container from '../../components/container';
import { connect } from 'react-redux';
import { login } from '../../state/user/actions';

class LoginComponent extends Component {
  render () {
    return(
      <Container>
        <button onClick={this.props.onLogin}>Login</button>
      </Container>
    );
  }
}

LoginComponent.propTypes = {
  onLogin: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: () => {
      dispatch(login())
    }
  }
}

const Login = connect(
  null,
  mapDispatchToProps
)(LoginComponent)

export default Login
