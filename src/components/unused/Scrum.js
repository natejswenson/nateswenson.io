import React, { Component } from 'react';
import { Divider,Grid, Image} from 'semantic-ui-react';
class Scrum extends Component {
render() {
  return (
    <div>
    <Divider horizontal>Proffesional Certifications</Divider>
      <Grid stackable columns={3}>
      
        <Grid.Column>
         
    <div class="ui fluid card">
      <div class="image">
        <Image src="https://www.scrumalliance.org/ScrumRedesignDEVSite/media/CertificationType/SAI_BadgeSizes_DigitalBadging_CSD.png"/>
      </div>
      <div class="content">
        <div class="header"as='h3'>Certifed Scrum Developer®</div>
        <div class="meta">
          <a> Scrum Alliance Certifications</a>
        </div>
        <div class="description">
        As a Certified Scrum Developers I have demonstrated — through a combination of formal training and hands on experience — that I have a working understanding of Scrum principles, as well as specialized Agile engineering skills.
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
          Certified in 2018
        </span>
      </div>
    </div>
 
    </Grid.Column>
  <Grid.Column>
    <div class="ui fluid card">
      <div class="image">
        <Image src="https://www.scrumalliance.org/ScrumRedesignDEVSite/media/ScrumAllianceMedia/Certification%20Badges/CSM_ConceptsR2-04.png?ext=.png"/>
      </div>
      <div class="content">
        <div class="header"as='h3'>CSP®-SM</div>
        <div class="meta">
        <a> Scrum Alliance Certifications</a>
        </div>
        <div class="description">
        As a Certified Scrum Professionals I challenge teams to improve the way Scrum and other Agile techniques are applied. I have demonstrated experience, documented training, and proven knowledge in the practical application  of Scrum.
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
        Certified in 2016
        </span>
      </div>
    </div>
    </Grid.Column>
    <Grid.Column>
    <div class="ui fluid card">
      <div class="image">
        <Image src="https://www.scrumalliance.org/ScrumRedesignDEVSite/media/ScrumAllianceMedia/Certification%20Badges/CSM_ConceptsR2-08.png?ext=.png"/>
      </div>
      <div class="content">
        <div class="header"as='h3'>CSP®-PO</div>
        <div class="meta">
        <a> Scrum Alliance Certifications</a>
        </div>
        <div class="description">
        As a Certified Scrum Professionals I challenge teams to improve the way Scrum and other Agile techniques are applied. I have demonstrated experience, documented training, and proven knowledge in the practical application  of Scrum.
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
        Certified in 2016
        </span>
      </div>
    </div>
   
    </Grid.Column>
   

    </Grid>
    <br/>
    </div>
 
      
         );
    }
}
export default Scrum;