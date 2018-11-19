import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {  Form, Divider, Button,Grid } from 'semantic-ui-react';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
const SignInPage = ({ history }) =>
<div>
  <Grid>
    <Grid.Row>
      <Grid.Column width={3}>
      </Grid.Column>
      <Grid.Column width={10}>  
        <Divider horizontal>Login to your Account.</Divider> 
        <SignInForm history={history} />
        <PasswordForgetLink />
        <SignUpLink />
      </Grid.Column>
      <Grid.Column width={3}>
    </Grid.Column>
  </Grid.Row>
  </Grid>
</div>
 

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      
      <Form size="large"onSubmit={this.onSubmit}> 
         <Form.Input value={email} onChange={event => this.setState(updateByPropertyName('email', event.target.value))} placeholder='email'/>
        <Form.Input value={password} onChange={event => this.setState(updateByPropertyName('password', event.target.value))} type='password' placeholder='Password'/>
      <Button color='green' disabled={isInvalid} type='submit'>Sign In </Button>
        { error && <p>{error.message}</p> }
      </Form>
     
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
