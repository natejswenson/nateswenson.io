import React, {Component} from 'react';
import {Grid,Button, Card, Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import json from '../../../src/navigation.json';

class Scrum extends (Component){
  constructor(){
    super();
    this.state={json}
    }
  render(){
    return(
    <div>
      <br/>
      <Grid stackable columns={1}>{
      this.state.json.landing.slice().map((Landing,i)=>
        <Grid.Column>    
          <Card fluid>
            <Card.Content>
            <Card.Header>{Landing.name}</Card.Header>
            <Card.Description>{Landing.description}</Card.Description>
            </Card.Content>
            <Link to={Landing.btn}>
              <Button color={json.color[0].color} attached='bottom' animated='fade' >
                <Button.Content visible>{Landing.btn_name}</Button.Content>
                <Button.Content hidden ><Icon name={Landing.btn_hidden}/></Button.Content>
              </Button>
            </Link>
            </Card>
          </Grid.Column>
       )}
       </Grid>
       </div>
     )
   }
 }
 export default Scrum;