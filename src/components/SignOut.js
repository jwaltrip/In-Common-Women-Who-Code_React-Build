import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () => {
  return (
    <form className="form-inline">
      <button
        className="btn btn-light"
        type="button"
        onClick={auth.doSignOut}
      >
        Sign Out
      </button>
    </form>
  );
};

export default SignOutButton;