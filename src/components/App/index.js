import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import AuthRoute from '../AuthRoute';
import HomePage from '../HomePage';
import SendEmailPage from '../SendEmailPage';
import SignInPage from '../SignInPage';
import AuthContext, { initialProps } from '../../context/auth';

const App = () => (
  <AuthContext.Provider value={initialProps}>
    <Router>
      <AuthRoute path="/" exact component={HomePage} />
      <AuthRoute path="/signin/" exact component={SendEmailPage} />
      <AuthRoute path="/signin/:link" component={SignInPage} />
    </Router>
  </AuthContext.Provider>
);

export default App;
