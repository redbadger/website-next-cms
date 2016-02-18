import React, { Component } from 'react';
import Button from '../../components/button';
import Container from '../../components/container';

export default class Login extends Component {
  static login = () => {
    //console.log(arguments);
  };

  render () {
    return(
      <Container>
        <input placeholder="Your Badger email" type="text" />
        <input placeholder="Your password" type="password" />
        <Button onclick={this.login}>Login</Button>
      </Container>
    );
  }
}
