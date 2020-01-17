import React, { Component } from 'react';
import {Icon, Segment} from 'semantic-ui-react';
import color from '../../../src/color.json'


class footer extends Component{
  
  render(){
	var style = {
		backgroundColor: "#ffffff",
		borderTop: "0px solid #000000",
		textAlign: "center",
		padding: "20px",
		position: "fixed",
		left: "0",
		bottom: "0",
		height: "40px",
		width: "100%",
	}
	this.state={color}
    return(
		<div>
			<div style={style}></div>
			<Segment basic >
				<center>
				<a href="https://www.instagram.com/riveci_leather/"><Icon size='large'  color={color.color} name='instagram' /></a>
				<a href="mailto:swen407@gmail.com?subject=Hello%20Nate"><Icon size='large'  color={color.color}name='mail' /></a>
				<a href="https://github.com/swenson11"><Icon size='large'  color={color.color} name='github' /></a>
				</center>
			</Segment>
		</div>	
    )
  }
}

export default footer;
