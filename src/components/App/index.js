import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import Footer from '../../Footer'
import AccountPage from '../Account';
import Wallets from '../../Products'
import Certs from '../Certs';
import SwensonLeather from '../../classes';
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes';

import './index.css';
import { Sticky } from 'semantic-ui-react';

const App = () =>
  <Router>
    <div className="app">
    <Sticky><Navigation /></Sticky>
      <Route exact path={routes.Scrum} component={() => <Certs />} />
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={routes.Leather} component={() => <SwensonLeather />} />
      <Route exact path={routes.Wallets} component={() => <Wallets/>} />
      <Footer />
    </div>
  </Router>

export default withAuthentication(App);
