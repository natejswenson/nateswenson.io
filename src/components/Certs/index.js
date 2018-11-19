import React from 'react';
import { Divider,Grid, Image, Card } from 'semantic-ui-react';
const Scrum =() =>(

  <Grid>
    <Grid.Row>
      <Grid.Column width={3}>
      </Grid.Column>
      <Grid.Column width={10}>
      <Divider horizontal>Proffesional Certifications</Divider>
        <Grid stackable columns={3}>
          <Grid.Column>
            <Card fluid>
                <Image src="https://www.scrumalliance.org/ScrumRedesignDEVSite/media/CertificationType/SAI_BadgeSizes_DigitalBadging_CSD.png"/>
              <Card.Content>
                <Card.Header>Certifed Scrum Developer®</Card.Header>
                <Card.Meta>Scrum Alliance Certifications</Card.Meta>
                <Card.Description>
                  As a Certified Scrum Developers I have demonstrated — 
                  through a combination of formal training and hands on 
                  experience — that I have a working understanding of Scrum 
                  principles, as well as specialized Agile engineering skills.
                </Card.Description>
              </Card.Content>
              <Card.Content extra><span class="right floated">Certified in 2018</span></Card.Content>
            </Card>
            </Grid.Column>
             <Grid.Column>
              <Card fluid>
               <Image src="https://www.scrumalliance.org/ScrumRedesignDEVSite/media/ScrumAllianceMedia/Certification%20Badges/CSM_ConceptsR2-04.png?ext=.png"/>
               <Card.Content>
                <Card.Header>CSP®-SM</Card.Header>
                <Card.Meta> Scrum Alliance Certifications</Card.Meta>
                <Card.Description>
                  As a Certified Scrum Professionals I challenge teams to 
                  improve the way Scrum and other Agile techniques are applied. 
                  I have demonstrated experience, documented training, and proven 
                  knowledge in the practical application  of Scrum.
                </Card.Description>
                </Card.Content>
                <Card.Content extra><span class="right floated">Certified in 2016</span></Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
          <Card fluid>
            <Image src="https://www.scrumalliance.org/ScrumRedesignDEVSite/media/ScrumAllianceMedia/Certification%20Badges/CSM_ConceptsR2-08.png?ext=.png"/>
            <Card.Content><Card.Header>CSP®-PO</Card.Header>
            <Card.Meta>Scrum Alliance Certifications</Card.Meta>
            <Card.Description>
              As a Certified Scrum Professionals I challenge teams to improve the 
              way Scrum and other Agile techniques are applied. I have demonstrated
               experience, documented training, and proven knowledge in the practical
                application  of Scrum.
            </Card.Description>
            </Card.Content>
            <Card.Content extra><span class="right floated">Certified in 201></span></Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
      <br/>
      </Grid.Column>
      <Grid.Column width={3}>
      </Grid.Column>
      </Grid.Row>
    </Grid>
  )
  
export default Scrum;