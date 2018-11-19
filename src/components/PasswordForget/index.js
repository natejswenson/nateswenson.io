import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button,Grid,Divider} from 'semantic-ui-react'
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const PasswordForgetPage = () =>
<div>
<Grid>
  <Grid.Row>
  <Grid.Column width={3}>
  </Grid.Column>
  <Grid.Column width={10}>  
    <Divider horizontal>Reset password...</Divider> 
    <PasswordForgetForm />
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
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <Form size="large"onSubmit={this.onSubmit}>
        <Form.Input
          value={this.state.email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          placeholder="Email Address"
        />
        <Button color='green' disabled={isInvalid} type="submit">
          Reset My Password
        </Button>

        { error && <p>{error.message}</p> }
      </Form>
    );
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};
