import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';
import SignOutButton from './SignOut';

const Navigation = ({ authUser }) => {
  return (
    <navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
      { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
      }
    </navbar>
  );
};

const NavigationAuth = () => {
  return (
    <div style={{ width: '100%'}}>
      <ul className="navbar-nav">
        <li className="nav-item"><Link to={routes.HOME} className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to={routes.ACCOUNT} className="nav-link">Account</Link></li>
        <li className="nav-item"><Link to={routes.GROUPS} className="nav-link">Groups</Link></li>
        <li className="nav-item ml-auto"><SignOutButton/></li>
      </ul>
    </div>
  );
};

const NavigationNonAuth = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item"><Link to={routes.SIGN_IN} className="nav-link">Sign In</Link></li>
      <li className="nav-item"><Link to={routes.LANDING} className="nav-link">Landing</Link></li>
    </ul>
  );
};


export default Navigation;