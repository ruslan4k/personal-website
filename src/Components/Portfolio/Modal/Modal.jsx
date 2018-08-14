import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Modal.css";
import Gallery from "../Gallery/Gallery";

class ModalExample extends React.Component {
  state = {
    modal: false,
    isLightBoxOpen: false
  };

  toggle = () => {
    // checks if child's lightbox open
    if (this.state.isLightBoxOpen) return;
    this.setState({
      modal: !this.state.modal
    });
  };

  changeLightBoxStatus = () => {
    this.setState({
      isLightBoxOpen: !this.state.isLightBoxOpen
    });
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={this.toggle}
        >
          {this.props.buttonLabel}
        </button>
        <Modal
          size="lg"
          centered
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            <Gallery
              images={this.props.project.images}
              changeLightBoxStatus={this.changeLightBoxStatus}
            />
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Visit Website
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
