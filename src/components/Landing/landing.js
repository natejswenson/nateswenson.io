import React, {Component} from 'react';
import {Grid,Button, Card} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import Landing from './landing.json';
import color from '../../../src/color.json'

class Scrum extends (Component){
  constructor(){
    super();
    this.state={Landing,color}
    }
  render(){
    return(
    <div>
      <br/>
      <Grid stackable columns={1}>{
      this.state.Landing.slice().map((Landing,i)=>
        <Grid.Column>    
          <Card fluid>
            <Card.Content>
            <Card.Header>{Landing.name}</Card.Header>
            <Card.Description>{Landing.description}</Card.Description>
            </Card.Content>
            <Link to={Landing.btn}>
              <Button attached='bottom'color={color.color} animated='fade' >
                    <Button.Content visible>{Landing.btn_name}</Button.Content>
                    <Button.Content hidden >{Landing.btn_hidden}</Button.Content>
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