import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import withAuthorization from '../Session/withAuthorization';



    const HomePage = ({ sessionStore }) =>
    <div>
    <h1>Account: {sessionStore.authUser.email}</h1>
    </div>
const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  inject('userStore'),
  observer
)(HomePage);