import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import { auth } from '../firebase';

// import route constants
import * as routes from '../constants/routes';

// sign up form page component
const SignUpPage = ({ history }) => {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignUpForm history={history} />
    </div>
  );
};

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

// sign up form
class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {...INITIAL_STATE};
  }

  onSubmit = (e) => {
    const {
      username,
      email,
      passwordOne,
      error,
    } = this.state;

    const { history } = this.props;

    (async function() {
      auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .catch(error => {
          console.log('error creating user', error);
          this.setState(byPropKey('error', error ));
        });
    })()
      .then(() => {
        if (!error) {
          this.setState({ ...INITIAL_STATE });
          console.log('redirect url', routes.HOME);
          history.push(routes.HOME);
        }
      });

    e.preventDefault();
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Username"
        />
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const SignUpLink = () => {
  return (
    <p>
      Don't have an account?
      <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>
  );
};

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};