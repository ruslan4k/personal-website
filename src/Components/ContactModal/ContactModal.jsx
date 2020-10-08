import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import ContactForm from './ContactForm/ContactForm';
import HireForm from './HireForm/HireForm';
import './ContactModal.css';

class ProjectModal extends React.Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    const { className, modalName } = this.props;
    return (
      <div>
        <p href="" className="modal-opener" onClick={this.toggle}>
          {this.props.buttonLabel}
        </p>
        <Modal
          size="lg"
          centered
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Contact Form</ModalHeader>
          <ModalBody>
            {modalName === 'contact' && <ContactForm toggle={this.toggle} />}
            {modalName === 'hire' && <HireForm toggle={this.toggle} />}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ProjectModal;
