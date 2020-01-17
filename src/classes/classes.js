import React, {Component} from 'react';
import { Grid,Card,Button,Image } from 'semantic-ui-react';
import otedTalks from './classes.json';
import color from '../../src/color.json'
class Scrum extends (Component){
  constructor(){
    super();
    this.state={otedTalks,color}
    }
  render(){
    return(
      <Grid stackable columns={1}>{
        this.state.otedTalks.slice().map((oted,i)=>
        <Grid.Column>
            <Card color="grey" fluid>
                <Card.Content>
                    <Image src={oted.img} floated='right'size='small'/>
                    <Card.Header>{oted.name}</Card.Header>
                    <Card.Meta>{oted.date}</Card.Meta>
                    <Card.Description>{oted.description}</Card.Description>
                </Card.Content>
                <a href={oted.btn}>
                  <Button attached='bottom' animated='fade' color={color.color} fluid >
                    <Button.Content visible>Register</Button.Content>
                    <Button.Content hidden>{oted.cost}</Button.Content>
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