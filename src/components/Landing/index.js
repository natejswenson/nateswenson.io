import React from 'react';
import SPAL from './SPAL.js';
import { Grid } from 'semantic-ui-react';

class Home extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={10}>
          <SPAL />
      </Grid.Column>
      <Grid.Column width={3}>
      </Grid.Column>
      </Grid.Row>
    </Grid>
    );
  }
}
export default (Home);
