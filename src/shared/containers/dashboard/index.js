import React, { Component } from 'react';
import Button from '../../components/button';
import Container from '../../components/container';

export default class Dashboard extends Component {
  static requiresAuth = true;

  render () {
    return(
      <Container>
        <Button>Events</Button>
        <Button>News</Button>
      </Container>
    );
  }
}
