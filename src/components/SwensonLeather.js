import React from 'react';
import { Divider,Grid, Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
const Leather =() =>(

<Grid>
    <Grid.Row>
      <Grid.Column width={3}>
      </Grid.Column>
      <Grid.Column width={10}>
      <Divider horizontal>Discover Swenson Leather</Divider>
			<Grid stackable columns={1}>
        <Grid.Column>    
          <Card fluid>
            <Card.Content>
            <Card.Header>About Swenson Leather</Card.Header>
            <Card.Meta>
						<a href="https://www.instagram.com/riveci_leather/">instagram</a>
            </Card.Meta>
            <Card.Description>
            Founded in 2016 under Riveci llc. as a handcrafted specialty leather goods company. Since 2018 Riveci llc is now only available as custom order,
						 and has been rebranded as Swenson Leather. A Minimalist wallets which is made to be seen
						 but crafted to last a lifetime is what you get with Swenson Leather . 
						Check out images on instagram! Reach out if you are looking for a custom wallet for yourself or for a gift.
            </Card.Description>
            </Card.Content>
            <a href="mailto:swen407@gmail.com?subject=Swenson Leather Minimalist Wallet">
            <Button fluid color='green'><i class="cert icon"></i>Get In Touch</Button></a>
            </Card>
          </Grid.Column>
          <Grid.Column>    
          <Card fluid>
            <Card.Content>
            <Card.Header>Swenson Leather</Card.Header>
            <Card.Meta>
            <a href="https://www.scrumalliance.org/">Agile and DevOps Certifications</a>
            </Card.Meta>
            <Card.Description>
            It is nice to see someones skills validated by an out side source. 
            I encourage you to take a look at my certifications!
            </Card.Description>
            </Card.Content>
            <Link to='/Scrum'>
            <Button fluid color='blue'><i class="cert icon"></i>View Certifications</Button></Link>
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
      <Grid.Column width={3}>
      </Grid.Column>
      </Grid>
      </Grid.Column>
      </Grid.Row>
      </Grid>
   
  )  
export default Leather;