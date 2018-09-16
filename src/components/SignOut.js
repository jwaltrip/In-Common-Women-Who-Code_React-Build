import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () => {
  return (
    <form className="form-inline">
      <button
        className="btn btn-success mr-3"
        type="button"
      >
        Add Group
      </button>
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