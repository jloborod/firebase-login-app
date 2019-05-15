import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import history from '../../utils/history';
import HomePage from '../HomePage';
import SendEmailPage from '../SendEmailPage';
import SignInPage from '../SignInPage';
import SplashScreen from '../SplashScreen';

const App = ({ isInitialised }) => isInitialised ?
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/signin/" exact component={SendEmailPage} />
      <Route path="/signin/:email" component={SignInPage} />
      <Route path="*" component={HomePage} />
    </Switch>
  </Router> :
  <SplashScreen />;

const mapStateToProps = state => ({
  isInitialised: state.auth.isInitialised,
});

export default connect(mapStateToProps)(App);
