import React, { Component } from 'react';
import {Icon, Segment,Sticky} from 'semantic-ui-react';


class footer extends Component{
  
  render(){
    return(
		
			<Segment inverted>
			<div class="ui center aligned container">
			<center>
							<a href="https://www.linkedin.com/in/swens407/"><Icon size='huge'  color='green' name='linkedin' /></a>
							<a href="mailto:swen407@gmail.com?subject=Hello%20Nate"><Icon size='huge'  color='green'name='mail' /></a>
							<a href="https://github.com/swenson11"><Icon size='huge'  color='green' name='github' /></a>
							</center>
			</div>
			</Segment>
		
    )
  }
}

export default footer;
