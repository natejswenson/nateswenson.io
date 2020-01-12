import React, {Component} from 'react';
import { Divider,Grid,Button, Card} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes';
import Landing from './landing.json';

class Scrum extends (Component){
  constructor(){
    super();
    this.state={Landing}
    }
  render(){
    return(
    <div>
    <Divider horizontal>SWENSON LEATHER</Divider>
      <Grid stackable columns={1}>{
      this.state.Landing.slice().map((Landing,i)=>
        <Grid.Column>    
          <Card fluid>
            <Card.Content>
            <Card.Header>{Landing.name}</Card.Header>
            <Card.Description>{Landing.description}</Card.Description>
            </Card.Content>
            <Link to={Landing.btn}>
              <Button fluid>{Landing.btn_name}</Button>
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