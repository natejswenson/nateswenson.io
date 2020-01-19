import InstagramEmbed from 'react-instagram-embed';
import React from 'react';
import { Grid, Divider} from 'semantic-ui-react';
import json from '../../../src/navigation.json'
class insta extends React.Component {  
  constructor(props) {
    super(props);
    this.state = { random1:Math.floor(Math.random() * Math.floor(json.cool.length)), random2:Math.floor(Math.random() * Math.floor(json.cool.length)),random3:Math.floor(Math.random() * Math.floor(json.cool.length)),json};
  }
  render() {
    return(
      
      <div>
        <br/>
        <Divider horizontal>My Past Projects...</Divider>
        <br/>
      <Grid columns={3} padded="vertically"stackable divided>
        <Grid.Column >
          <center><InstagramEmbed url={json.cool[this.state.random3].url}maxWidth={320} hideCaption={true}/></center>
        </Grid.Column>
        <Grid.Column >
          <center><InstagramEmbed url={json.cool[this.state.random2].url}maxWidth={320} hideCaption={true}/></center>
        </Grid.Column>
        <Grid.Column floated="right">
          <center><InstagramEmbed url={json.cool[this.state.random1].url}maxWidth={320} hideCaption={true}/></center>
        </Grid.Column>
      </Grid>
      </div>
      );
    } 
}
export default(insta);