import React from 'react';
import { Divider,Grid,Container,Header,List, Step,Icon} from 'semantic-ui-react';
const ProfBio =() =>(

  <Grid>
    <Grid.Row>
      <Grid.Column width={3}>
      </Grid.Column>
      <Grid.Column width={10}>
	  <Step.Group stackable='tablet'>
    <Step>
      <Icon name='plane' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>
    <Step active>
      <Icon name='dollar' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
    <Step disabled>
      <Icon name='info circle' />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
        <Step.Description>Verify order details</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
)
	  <Container textAlign='center'><Header as='h2'>Work Experience</Header></Container>
		<Container><Header as='h5'>Senior DevOps Engineer, Optum</Header></Container> 
		<Container>
			<List>
				<List.Item icon='angle right' content='Own definition and execution of DevOps Stategy at enterprise level.' />
				<List.Item icon='angle right' content='Coach Teams on XP practices' />
				<List.Item icon='angle right' content='End to end pipeline setup.' />
				<List.Item icon='angle right' content='End to end pipeline setup.' />

				<List.Item
				icon='mail'
				content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>}
				/>
				<List.Item icon='linkify' content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>} />
			</List>
			  
			Host office hours which is open to anyone in the organization to come 
			and have open discussions about anything agile as well as get support 
			they need to further their transformation. On a bi-weekly basis I  host 
			a technology roundtable for technology leaders who are looking for innovative 
			ways to advance their DevOps CI/CD strategy. Develop and Deliver agile metrics 
			training across the enterprise. </Container>
<br />
	  <h4>Systems Engineer, Novaspect</h4>
	  <h5>Product Owner and lead engineer for the Remote Automation Systems (RAS) product in 
		  the Bakken region of Western North Dakota and Montana. Led a a team, comprised of two developers and four testers, responsible for the development and installation of the RAS product on new oil well sites. Detailed the scope and acceptance criteria for each story and facilitated planning with my team prior to beginning work on the first site. We operated on two week sprint cadence; each individual on my team including myself spent a week in the office developing code followed by a week onsite prepping a site for install or installing and commissioning the new software. Responsible for final sign-off of development work as well as onsite commissioning work to ensure state and national standards were followed. CI/CD practices were used to mitigate risk and speed the commissioning process. Provided training to well pad leaders on safe operation of the new software to reduce the need for demand customer support from members on my team.</h5>
<br />
	  <h4>Control Engineer, JDP Automation</h4>
	  <h5>As an Engineer I worked as a full stack developer on a team responsible upgrading the industrial control software for pumping and holding sites along the Enbridge pipeline. Migrated legacy control software for large pumps, holding tanks, and various measurement sensors for projects worth upwards of three million USD. Responsible for end to end delivery of the software to the customer including the final sign-off and check out during commissioning and startup. Built code that exceeded state and federal regulations. Successfully migrated 3 sites, on October 2012 I became the lead engineer for a 13 car load out project. As a lead engineer I was a full stack developer in addition to ensuring all developers on my team were in sync and felt empowered and had the tools they needed to adequately complete work. Ensured code from entire team met customer requirements and followed all state and federal safety regulations. We were able to incrementally bring the site online by created vertical slices of work that teams could deploy in the field on a weekly basis. Entire project took 9 months, with the completed facility able to safely load a 96 car train in under 12 hours.</h5>
</Grid.Column>
</Grid.Row>
<Grid.Column width={3}>
      </Grid.Column>
	  </Grid>





)
export default ProfBio;