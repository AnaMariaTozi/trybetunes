import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from './Loading';
import { createUser } from '../services/userAPI';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      isSaveBtnDisable: 'true',
      loading: false,
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange({ target: { value } }) {
    const MIN_CHARACTERS = 3;

    if (value.length >= MIN_CHARACTERS) {
      this.setState({ userName: value, isSaveBtnDisable: false });
    } else {
      this.setState({ userName: value, isSaveBtnDisable: true });
    }
  }

  handleSave = async () => {
    const { userName } = this.state;
    this.setState({
      loading: true,

    });

    await createUser({ name: userName });
    this.setState({
      loading: false,
      redirect: true,
    });
  }

  render() {
    const {
      isSaveBtnDisable,
      loading,
      redirect,
    } = this.state;

    if (loading) {
      return <Loading />;
    }
    if (redirect) {
      return <Redirect to="/search" />;
    }
    const newLocal = (
      <div>
        <form>

          <h1>Login</h1>

          <label htmlFor="nome">
            Nome
            <input
              data-testid="login-name-input"
              name="nome"
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <button
            data-testid="login-submit-button"
            name="entrar"
            type="submit"
            disabled={ isSaveBtnDisable }
            onClick={ this.handleSave }
          >
            Entrar

          </button>

        </form>
      </div>
    );

    return (

      <div data-testid="page-login">

        { loading ? <Loading /> : newLocal }

      </div>
    );
  }
}

export default Login;
