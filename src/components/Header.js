import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

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
    // if (loading) return <p>Carregando...</p>
    return (
      <header data-testid="header-component">
        <h2 data-testid="header-user-name">{user}</h2>
        {loading ? <Loading /> : null}
        <nav>
          <Link data-testid="link-to-search" to="/search">Pesquisa</Link>
          <Link data-testid="link-to-favorites" to="/favorites">Favoritas</Link>
          <Link data-testid="link-to-profile" to="/profile">Perfil</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
