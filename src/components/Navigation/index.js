import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Button,Icon } from 'semantic-ui-react'
import { compose } from 'recompose';

import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = ({ sessionStore }) =>
  <div>
    { sessionStore.authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
<div class="header">
  <Menu pointing secondary> 
    <Link to={routes.LANDING}><Menu.Item  name='home'/></Link>
    <Link to={routes.Leather}><Menu.Item  name='classes' /></Link>
    <Link to={routes.ACCOUNT}><Menu.Item  name='my account' /></Link>
    <SignOutButton />
    </Menu>
      </div>

const NavigationNonAuth = () =>
<div class="header">
  <Menu pointing secondary>
    <Link to={routes.LANDING}><Menu.Item  name='home' /></Link>
    <Link to={routes.Leather}><Menu.Item  name='classes' /></Link>
    <Link to={routes.Wallets}><Menu.Item  name='For Sale' /></Link>
    <Link to={routes.SIGN_IN}><Menu.Item  name='sign in' /></Link>
  </Menu>
      </div>

export default compose(
  inject('sessionStore'),
  observer
)(Navigation);