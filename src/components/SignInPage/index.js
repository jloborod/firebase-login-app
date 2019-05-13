import React, { useState, useEffect } from 'react';

import Error from '../Error';

const SignInPage = ({
  match,
  location,
  signIn,
  setUser,
}) => {
  const [error, setError] = useState(null);
  const email = match.params.email;
  const link = `${email}${location.search}`;

  useEffect(() => {
    const confirmSignIn = () => {
      signIn(email, link)
        .then(resp => {
          setUser(resp.user);
        })
        .catch(err => {
          setError(err);
        });
    }
    confirmSignIn();
  }, [email, link]);

  return error && (
    <Error />
  );
};

export default SignInPage;
