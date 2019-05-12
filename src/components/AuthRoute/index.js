import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../context/auth';

const AuthRoute = ({ component: Component, ...rest }) => {
  const { isSignedIn, sendEmail, signIn, signOut } = useContext(AuthContext);
  console.log(isSignedIn(), rest.path, rest.path.includes('signin'));

  return (
    <Route
      {...rest}
      render={props => {
        return (
          isSignedIn() && !rest.path.includes('signin')
        )
        ||
        (
          !isSignedIn() && rest.path.includes('signin')
        ) ? (
          <Component
            {...props}
            sendEmail={sendEmail}
            singIn={signIn}
            signOut={signOut}
          />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

export default AuthRoute;
