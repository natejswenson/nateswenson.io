import React from 'react';
import { Divider,Grid,  Card } from 'semantic-ui-react';
const Projects =() =>(
  <Grid>
    <Grid.Row>
      <Grid.Column width={3}>
      </Grid.Column>
      <Grid.Column width={10}>
      <Divider horizontal>Personal Projects</Divider>
      <Grid stackable columns={3}>
        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Card.Header>My Coach</Card.Header>
              <Card.Meta>NodeJS application build on AWS Lambda</Card.Meta>
              <Card.Description>
                Coach offers motivation as you are guided through your choice of chest, 
                legs, abs, and cardio workouts that can be done in around 7 minutes minutes
                and require no additional fitness equipment. To prevent boredom the exercises 
                for each workout are on seven day rotations.
             </Card.Description>
             </Card.Content>
              <a href="https://www.amazon.com/My-Coach/dp/B07F5HSK52/ref=sr_1_4?s=digital-skills&ie=UTF8&qid=1536201423&sr=1-4&keywords=my+coach">
	            <div class="ui bottom attached button">
	            <i class="amazon icon"></i>View on Amazon</div>  
	            </a>
            </Card>
      </Grid.Column>
      <Grid.Column>
        <Card fluid>
          <Card.Content>
            <Card.Header>Relaxing Plank</Card.Header>
            <Card.Meta>NodeJS application build on AWS Lambda</Card.Meta>
            <Card.Description>
              Build a stronger core while reducing stress and finding a deeper sense of calm. 
              You choose the length of your workout; after each round you will be asked if you 
              would like to continue. You will be guided through several planks while stress 
              reducing ocean sounds play in the background. Practice deep breathing and shut 
              your eyes while doing this workout and it is easy to forget you are working out. 
              Total minutes planked will be reported out to your device upon completion of the workout.
              </Card.Description>
	            </Card.Content>
	        <a href="https://www.amazon.com/My-Coach/dp/B07F5HSK52/ref=sr_1_4?s=digital-skills&ie=UTF8&qid=1536201423&sr=1-4&keywords=my+coach">
	        <div class="ui bottom attached button">
	        <i class="amazon icon"></i>View on Amazon</div>  
	        </a>
      </Card>
    </Grid.Column>
    <Grid.Column>
        <Card fluid>
          <Card.Content>
            <Card.Header>Relaxing Plank</Card.Header>
            <Card.Meta>NodeJS application build on AWS Lambda</Card.Meta>
            <Card.Description>
              Build a stronger core while reducing stress and finding a deeper sense of calm. 
              You choose the length of your workout; after each round you will be asked if you 
              would like to continue. You will be guided through several planks while stress 
              reducing ocean sounds play in the background. Practice deep breathing and shut 
              your eyes while doing this workout and it is easy to forget you are working out. 
              Total minutes planked will be reported out to your device upon completion of the workout.
              </Card.Description>
	            </Card.Content>
	        <a href="https://www.amazon.com/My-Coach/dp/B07F5HSK52/ref=sr_1_4?s=digital-skills&ie=UTF8&qid=1536201423&sr=1-4&keywords=my+coach">
	        <div class="ui bottom attached button">
	        <i class="amazon icon"></i>View on Amazon</div>  
	        </a>
      </Card>
    </Grid.Column>
    </Grid>
    </Grid.Column>
  </Grid.Row>
</Grid>
  )
export default Projects;