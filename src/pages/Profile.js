import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      userEmail: '',
      userImage: '',
      userDescription: '',
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const { name, email, description, image } = await getUser();
    this.setState({
      username: name,
      userEmail: email,
      userImage: image,
      userDescription: description,
      loading: false,
    });
  }

  render() {
    const {
      username,
      userEmail,
      userImage,
      userDescription,
      loading,
    } = this.state;

    return (
      <div data-testid="page-profile">
        <Header />
        {
          loading ? <Loading />
            : (
              <>
                <img
                  src={ userImage }
                  data-testid="profile-image"
                  alt={ username }
                />
                <Link to="/profile/edit">
                  <button type="button">Editar perfil</button>
                </Link>
                <label htmlFor="nome">
                  Nome
                  <h2 name="nome">{username}</h2>
                </label>
                <label htmlFor="email">
                  Email
                  <h2 name="email">{userEmail}</h2>
                </label>
                <label htmlFor="nome">
                  Descrição
                  <h2 name="descricao">{userDescription}</h2>
                </label>

              </>
            )
        }
      </div>
    );
  }
}

export default Profile;
