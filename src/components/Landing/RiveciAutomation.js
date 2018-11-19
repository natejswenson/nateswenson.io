import React, { Component } from 'react';
import ModalWrapper from './ModalWrapper';
class Scrum extends Component {
  render() {
    return (
			<div class="Maincontainer_Teal" id="HomeAutomation">
			<div class="Mainleftpane">
					<center>
						<h6><strong>
						Home Automation</strong></h6>
					</center>
				</div>
				<div class="Mainrightpane">
					<center>
						<center>
						<h6><strong>Free Consultation</strong></h6>
					</center>
			<h6>We can discuss your ideas for home automation. I enjoy this and there is no charge for this service. To get started, answer a few questiosn to help fuel our discussion!<br></br></h6>
			<br></br>
			<ModalWrapper />
			</center>
			</div>
			</div>
         );
    }
}
export default Scrum;