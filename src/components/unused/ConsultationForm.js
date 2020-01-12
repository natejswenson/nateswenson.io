import React, { Component } from 'react';
import {db} from '../../firebase'
import './ModalWrapper';
import {  Form, Grid, } from 'semantic-ui-react';



class ConsultationForm extends Component {
    constructor() {
        super();
        this.state = {Email: '',FName: '',LName:'', Message:'',Phone:'',};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
        handleSubmit(e) {
          e.preventDefault();
          const itemsRef = db.ref('items');
          const users = {
            Email: this.state.Email,
            FName: this.state.FName,
            LName: this.state.LName,
            Message: this.state.Message,
            Phone: this.state.Phone
          }
          itemsRef.push(users);
          this.setState({ Email: '',FName: '',LName:'', Message:'',Phone:''});
          alert("We have recieved your form and will be intouch shortly.");
        }
render() {
  return (
    <div className='login-form'>  
   <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
      
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ width: 400 }}>
    <Form size="large" onSubmit={this.handleSubmit}>
    
            <Form.Input label='First Name'icon='user' iconPosition='left' placeholder='John Doe' name='FName' value={this.state.FName} onChange={this.handleChange} />
            <Form.Input label='Email' icon='mail' iconPosition='left'placeholder='johnDoe@domain.com' name='Email' value={this.state.Email} onChange={this.handleChange} />
            <Form.Input label='Phone'icon='phone' iconPosition='left' placeholder='xxx-xxx-xxxx' name='Phone' value={this.state.Phone} onChange={this.handleChange} />
          <Form.Input id='form-button-control-public' label='Message' placeholder='Enter your message here.' name='Message'value={this.state.Message} onChange={this.handleChange} />
          <Form.Button color='orange' fluid size='large' content='Submit' />
    </Form>
    </Grid.Column>
      </Grid>
    </div>
    
    );
  }
}
export default (ConsultationForm);
