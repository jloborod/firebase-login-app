import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import AuthRoute from '../AuthRoute';
import HomePage from '../HomePage';
import SendEmailPage from '../SendEmailPage';
import SignInPage from '../SignInPage';
import AuthContext, { initialProps } from '../../context/auth';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        ...initialProps
      }}
    >
      <Router>
        <Switch>
          <AuthRoute path="/" exact component={HomePage} />
          <AuthRoute path="/signin/" exact component={SendEmailPage} />
          <AuthRoute path="/signin/:email" component={SignInPage} />
          <AuthRoute path="*" component={HomePage} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  )
};

export default App;
