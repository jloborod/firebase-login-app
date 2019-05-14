import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthRoute from '../AuthRoute';
import HomePage from '../HomePage';
import SendEmailPage from '../SendEmailPage';
import SignInPage from '../SignInPage';
import Something from '../Something';

const App = () => (
  <Router>
    <Switch>
      <Route path="*/:email" component={Something} />
      <Route path="*" component={Something} />
    </Switch>
  </Router>
);
// const App = () => (
//   <Router>
//     <Switch>
//       <AuthRoute path="/" exact component={HomePage} />
//       <AuthRoute path="/signin/" exact component={SendEmailPage} />
//       <AuthRoute path="/signin/:email" component={SignInPage} />
//       <AuthRoute path="*" component={HomePage} />
//     </Switch>
//   </Router>
// );

export default App;
