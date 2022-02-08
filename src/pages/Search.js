import React, { Component } from 'react';
import Header from '../components/Header';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <>
        <div data-testid="page-search">Search</div>
        <Header />
      </>
    );
  }
}
