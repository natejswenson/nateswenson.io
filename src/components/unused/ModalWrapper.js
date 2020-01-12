import React from "react";  
import Modal from "react-responsive-modal";
import ConsultationForm from './ConsultationForm';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  
};

class ModalWrapper extends React.Component {
  state = {
    open: false
  };
  constructor (){
    super();
  this.onCloseModal = this.onCloseModal.bind(this);
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div style={styles}>
        <button class="btn" onClick={this.onOpenModal}>Consult Form</button>
        <Modal open={open} onClose={this.onCloseModal} center>
 
       <ConsultationForm />

 </Modal>
      </div>
    );
  }
}

export default ModalWrapper;