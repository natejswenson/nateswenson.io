import React, {Component} from 'react';
import { Grid,Card,Button,Image } from 'semantic-ui-react';
import json from '../../../src/navigation.json';
class Scrum extends (Component){
  constructor(){
    super();
    this.state={json}
    }
  render(){
    return(
      <Grid stackable columns={1}>{
          this.state.json.classes.slice().map((json,i)=>
        <Grid.Column>
            <Card color="grey" fluid>
                <Card.Content>
                    <Image src={json.img} floated='right'size='small'/>
                    <Card.Header>{json.name}</Card.Header>
                    <Card.Meta>{json.date}</Card.Meta>
                    <Card.Description>{json.description}</Card.Description>
                </Card.Content>
                <a href={json.btn}>
                  <Button attached='bottom' animated='fade' color={this.state.json.color[0].color} fluid >
                    <Button.Content visible>Register</Button.Content>
                    <Button.Content hidden>{json.cost}</Button.Content>
                  </Button>
                </a>
            </Card>
        </Grid.Column>
      )}
      </Grid>
    )
  }
}
export default Scrum;