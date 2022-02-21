import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';
import Loading from '../components/Loading';

class ProfileEdit extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      image: '',
      description: '',
      loading: false,
      saveBtnDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const user = await getUser();
    this.setState({
      loading: false,
      name: user.name,
      email: user.email,
      description: user.description,
      image: user.image,
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    this.handleSubmit();
  }

  handleSubmit = () => {
    this.setState((prevState) => {
      const { name, email, description, image } = prevState;
      const validation = (name.length > 0
      && email.length > 0
      && description.length > 0
      && image.length > 0);
      if (validation) {
        return ({ saveBtnDisabled: false });
      } return ({ saveBtnDisabled: true });
    });
  }

  async handleClick() {
    const { name, email, image, description } = this.state;
    const { history } = this.props;
    this.setState({ loading: true }, () => {
      updateUser({ name, email, image, description }).then(() => {
        history.push('/profile');
      });
    });
  }

  render() {
    const { name, email, image, description, loading, saveBtnDisabled } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <h1>Editar perfil</h1>
        {loading
          ? <Loading />
          : (
            <form>
              <div>

                <label htmlFor="image">
                  <input
                    type="text"
                    data-testid="edit-input-image"
                    name="image"
                    value={ image }
                    onChange={ this.handleChange }
                  />
                </label>
              </div>
              <label htmlFor="name">
                Nome
                <input
                  type="text"
                  data-testid="edit-input-name"
                  name="name"
                  value={ name }
                  onChange={ this.handleChange }
                />
              </label>
              <label htmlFor="email">
                E-mail
                <input
                  type="email"
                  data-testid="edit-input-email"
                  name="email"
                  value={ email }
                  onChange={ this.handleChange }
                />
              </label>
              <label htmlFor="description">
                Descrição
                <input
                  type="text"
                  data-testid="edit-input-description"
                  name="description"
                  value={ description }
                  onChange={ this.handleChange }
                />
              </label>
              <button
                type="button"
                data-testid="edit-button-save"
                disabled={ saveBtnDisabled }
                onClick={ this.handleClick }
              >
                Salvar
              </button>
            </form>
          )}
      </div>

    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.func.isRequired,
};

export default ProfileEdit;
