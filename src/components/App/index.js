import React from 'react';

import {BrowserRouter as Router,Route,} from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import Footer from './Footer'
import Wallets from '../Products'
import SwensonLeather from './classes';
import * as routes from '../../constants/routes';
import './index.css';
import { Sticky } from 'semantic-ui-react';

const App = () =>
  <Router >
    <div className="app">
    <Sticky><Navigation /></Sticky>
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.Leather} component={() => <SwensonLeather />} />
      <Route exact path={routes.Wallets} component={() => <Wallets/>} />
      <Footer />
    </div>
  </Router>

export default (App);
