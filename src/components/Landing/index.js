import React from 'react';
import Landing from './landing.js';
import { Grid } from 'semantic-ui-react';
import Instagram from './Instagram'

class Home extends React.Component {
  render() {
    return (
      <Grid >
        <Grid.Row>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={14}>
          <Landing />
          <Instagram/>
      </Grid.Column>
      <Grid.Column width={1}>
      </Grid.Column>
      </Grid.Row>
    </Grid>
    );
  }
}
export default (Home);
