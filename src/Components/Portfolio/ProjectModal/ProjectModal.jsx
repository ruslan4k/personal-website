import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import './ProjectModal.css';
import Gallery from '../Gallery/Gallery';

class ProjectModal extends React.Component {
  state = {
    modal: false,
    isLightBoxOpen: false,
  };

  toggle = () => {
    // checks if child's lightbox open
    if (this.state.isLightBoxOpen) return;
    this.setState({
      modal: !this.state.modal,
    });
  };

  changeLightBoxStatus = () => {
    this.setState({
      isLightBoxOpen: !this.state.isLightBoxOpen,
    });
  };

  render() {
    const {
      images,
      title,
      description,
      url,
      technologies,
    } = this.props.project;
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
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ModalBody>{description}</ModalBody>
          <ModalBody>
            <Gallery
              images={images}
              changeLightBoxStatus={this.changeLightBoxStatus}
            />
          </ModalBody>
          <ModalFooter>
            <a href={url} target="blank">
              <Button color="primary">Visit Website</Button>
              {' '}
            </a>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ProjectModal;
