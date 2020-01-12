import React from 'react';
import { Grid} from 'semantic-ui-react';
import Video from './classes'


class Home extends React.Component {
  render() {
    return (
      <Grid stackable >
        <Grid.Row attached='true'  style={{ minHeight: 600, padding: '5em 0em' }}>
        <Grid.Column width={3}>
        </Grid.Column>
          <Grid.Column width={10}>
           <Video />
          </Grid.Column> 
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
export default (Home);