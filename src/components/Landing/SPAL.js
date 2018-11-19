import React from 'react';
import { Divider,Grid,Button, Card} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes';
const Scrum =() =>(
    <div>
    <Divider horizontal>nateswenson.io</Divider>
      <Grid stackable columns={1}>
        <Grid.Column>    
          <Card fluid>
            <Card.Content>
            <Card.Header>Nates Proffesional Certifications</Card.Header>
            <Card.Meta>
            <a href="https://www.scrumalliance.org/">Agile and DevOps Certifications</a>
            </Card.Meta>
            <Card.Description>
            It is nice to see someones skills validated by an out side source. 
            I encourage you to take a look at my certifications!
            </Card.Description>
            </Card.Content>
            <Link to={routes.Scrum}>
            <Button fluid color='orange'><i class="cert icon"></i>View Certifications</Button></Link>
            </Card>
          </Grid.Column>
          <Grid.Column>    
          <Card fluid>
            <Card.Content>
            <Card.Header>Swenson Leather</Card.Header>
            <Card.Meta>
            <a href="https://www.instagram.com/riveci_leather/">View on Instagram</a>
            </Card.Meta>
            <Card.Description>
            Need a wallet? Interested in Leather? A Minimalist wallets which is made to be seen
						 but crafted to last a lifetime is what you get with Swenson Leather . <strong>Check us Out</strong>
            </Card.Description>
            </Card.Content>
            <Link to={routes.Leather}>
            <Button fluid color='blue'><i icon="cert icon"></i>Discover Swenson Leather</Button></Link>
            </Card>
          </Grid.Column>
          <Grid.Column>    
          <Card fluid>
            <Card.Content>
            <Card.Header>Swenson Automation</Card.Header>
            <Card.Meta>
            <a href="https://www.scrumalliance.org/">Agile and DevOps Certifications</a>
            </Card.Meta>
            <Card.Description>
            It is nice to see someones skills validated by an out side source. 
            I encourage you to take a look at my certifications!
            </Card.Description>
            </Card.Content>
            <Link to='/Scrum'>
            <Button fluid color='green'><i class="cert icon"></i>View Certifications</Button></Link>
            </Card>
          </Grid.Column>
        </Grid>
    <br/>
    </div>
         )
export default Scrum;