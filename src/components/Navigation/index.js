
import { Link } from 'react-router-dom';
import json from './navigation.json';
import React, { Component } from 'react';
import { Menu,Grid} from 'semantic-ui-react';
import color from '../../../src/color.json'
var style = {
  backgroundColor: "#ffffff",
  borderTop: "0px solid #000000",
  textAlign: "center",
  position: "fixed",
  left: "0",
  top: "0",
  height: "auto ",
  width: "100%",
}
export default class MenuExampleSecondaryPointing extends Component {
  constructor(){
    super();
    this.state={color,json,activeItem:'Swenson Leather'}
    }
  handleItemClick = (e, {name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem} = this.state
    return (
      <Grid >
      <Grid.Row>
      <Grid.Column width={0}>
      </Grid.Column>
      <Grid.Column width={16}>
        <div style={style}>
        <Menu pointing secondary color={color.color}>{
          this.state.json.slice().map((json,i)=>
              <Link to={json.route}><Menu.Item name={json.name} active={activeItem === json.name} onClick={this.handleItemClick}/></Link>
            )}
        </Menu>
        </div>
        </Grid.Column>
      <Grid.Column width={0}>
      </Grid.Column>
      </Grid.Row>
    </Grid>
       
    
    )
  }
}
