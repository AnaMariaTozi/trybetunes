import React, { Component } from 'react';
import Header from '../components/Header';

export default class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <>
        <div data-testid="page-album">Album</div>
        <Header />
      </>
    );
  }
}
