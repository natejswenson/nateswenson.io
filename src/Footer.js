import React, { Component } from 'react';
import {Icon, Segment,Sticky} from 'semantic-ui-react';


class footer extends Component{
  
  render(){
	var style = {
		backgroundColor: "#000000",
		borderTop: "0px solid #000000",
		textAlign: "center",
		padding: "20px",
		position: "fixed",
		left: "0",
		bottom: "0",
		height: "60px",
		width: "100%",
	}
    return(
		<div>
			<div style={style}></div>
			<Segment basic >
				<center>
				<a href="https://www.instagram.com/riveci_leather/"><Icon size='large'  color='grey' name='instagram' /></a>
				<a href="mailto:swen407@gmail.com?subject=Hello%20Nate"><Icon size='large'  color='grey'name='mail' /></a>
				<a href="https://github.com/swenson11"><Icon size='large'  color='grey' name='github' /></a>
				</center>
			</Segment>
		</div>	
    )
  }
}

export default footer;
