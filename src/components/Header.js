import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Loading from '../pages/loading';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      user: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.handleGetUser();
  }

  handleGetUser = async () => {
    this.setState({ loading: true });
    const { name } = await getUser();
    this.setState({ user: name, loading: false });
  }

  render() {
    const { user, loading } = this.state;

    return (
      <header data-testid="header-component">
        <h2 data-testid="header-user-name">{user}</h2>
        {loading ? <Loading /> : null}
      </header>
    );
  }
}

export default Header;
