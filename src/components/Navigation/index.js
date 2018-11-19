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
  <Segment inverted>
    <Menu inverted secondary>
    <Link to={routes.LANDING}><Menu.Item><Button circular >
      <Button.Content>
        <Icon name='home icon' />
      </Button.Content>
    </Button></Menu.Item></Link>
    <Link to={routes.HOME}><Menu.Item><Button circular>
      <Button.Content >
        <Icon name='user' />
      </Button.Content>
    </Button></Menu.Item></Link>
    <Link to={routes.ACCOUNT}><Menu.Item><Button circular>
      <Button.Content>
        <Icon name='cogs' />
      </Button.Content>
    </Button></Menu.Item></Link>
    <SignOutButton />
    </Menu>
      </Segment>
      </div>

const NavigationNonAuth = () =>
<div class="header">
<Segment inverted>
  <Menu inverted secondary>
  <Link to={routes.LANDING}><Menu.Item><Button circular>
      <Button.Content>
        <Icon name='home icon' />
      </Button.Content>
    </Button></Menu.Item></Link>
    <Link to={routes.SIGN_IN}><Menu.Item><Button circular>
      <Button.Content>
        <Icon name='sign-in' />
      </Button.Content>
    </Button></Menu.Item></Link>
    </Menu>
      </Segment>
      </div>

export default compose(
  inject('sessionStore'),
  observer
)(Navigation);