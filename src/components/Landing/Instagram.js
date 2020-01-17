import InstagramEmbed from 'react-instagram-embed';
import React from 'react';
import { Grid,Divider,Button,Transition} from 'semantic-ui-react';
class insta extends React.Component {  
 
  render() {
    return(
      <Grid centered columns={3} stackable>
        <Grid.Column >
          <InstagramEmbed url='https://www.instagram.com/p/BdLc-qyDELL/'maxWidth={320} hideCaption={true}/>
        </Grid.Column>
        <Grid.Column>
          <InstagramEmbed url='https://www.instagram.com/p/B4QoL62hOjE/'maxWidth={320} hideCaption={true}/>
        </Grid.Column>
        <Grid.Column >
          <InstagramEmbed url='https://www.instagram.com/p/BZkGEHtFlQS/'maxWidth={320} hideCaption={true}/>
        </Grid.Column>
        
      </Grid>
      );
    } 
}
export default(insta);