import React from 'react';
import { Grid} from 'semantic-ui-react';
import LeatherClasses from './classes'


class Home extends React.Component {
  render() {
    return (
      <Grid stackable >
        <Grid.Row attached='true'  style={{ minHeight: 600, padding: '5em 0em' }}>
        <Grid.Column width={1}>
        </Grid.Column>
          <Grid.Column width={14}>
           <LeatherClasses />
          </Grid.Column> 
          <Grid.Column width={1}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
export default (Home);