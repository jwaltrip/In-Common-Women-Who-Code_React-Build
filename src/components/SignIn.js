import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) => {
  return (
    <div className="container">
      <h1>Sign In</h1>
      <SignInForm history={history}/>
      <SignUpLink/>
    </div>
  );
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
      error,
    } = this.state;

    const {
      history,
    } = this.props;

    (async function() {
      auth.doSignInWithEmailAndPassword(email, password)
        .catch(error => {
          this.setState(byPropKey('error', error));
        });
    })()
      .then(() => {
        if (!error) {
          this.setState({ ...INITIAL_STATE });
          console.log('redirect url', routes.HOME);
          history.push(routes.HOME);
        }
      });

    event.preventDefault();
  };

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <input
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            placeholder="Email Address"
          /><br/>
          <input
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            type="password"
            placeholder="Password"
          /><br/>
          <button disabled={isInvalid} type="submit">
            Sign In
          </button>

          { error && <p>{error.message}</p> }
        </form>
      </div>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};