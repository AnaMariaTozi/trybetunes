import React, { Component } from 'react';
import Header from '../components/Header';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <>
        <div data-testid="page-profile">Profile</div>
        <Header />
      </>
    );
  }
}

export default Profile;
