import React, { Component } from 'react';
import Container from '../../components/container';
import fetch from '../../util/fetch-proxy';

export default class Login extends Component {
  constructor (props) {
    super(props);
    this.fetch = fetch();
  }

  doLogin () {
    this.fetch('http://localhost:8000/api/login').then((response)=>{
      window.location = response.url;
    });
  }

  render () {
    return(
      <Container>
        <button onClick={this.doLogin.bind(this)}>Login</button>
      </Container>
    );
  }
}
