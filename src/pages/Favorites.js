import React, { Component } from 'react';
import Header from '../components/Header';

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <>
        <div data-testid="page-favorites">Favorites</div>
        <Header />
      </>
    );
  }
}

export default Favorites;
