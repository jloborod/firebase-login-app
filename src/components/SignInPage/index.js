import React from 'react';

import Error from '../Error';

const SignInPage = ({
  match,
  location,
  signIn,
  setUser,
}) => {
  const email = match.params.email;
  const link = `${email}${location.search}`;
  // console.log(email, link);


  return <span>Sign in page</span>
};

export default SignInPage;
