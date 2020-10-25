/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ProjectModal.css';
import { object } from 'prop-types';
import Gallery from '../Gallery/Gallery';

const ProjectModal = ({ project }) => {
  const { images, title, description, url } = project;
  const [modal, setOpenModal] = useState(false);
  const [isLightBoxOpen, setLightBoxOpen] = useState(false);
  const toggle = () => {
    if (isLightBoxOpen) return;
    setOpenModal((state) => !state);
  };

  const changeLightBoxStatus = () => {
    setLightBoxOpen((state) => !state);
  };

  return (
    <div>
      <div className="portfolio-button" onClick={toggle} onKeyDown={toggle} role="button" tabIndex={-1}>
        <a className="rn-btn">Show Details</a>
      </div>
      <Modal size="lg" centered isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{description}</ModalBody>
        <ModalBody>
          <Gallery images={images} changeLightBoxStatus={changeLightBoxStatus} />
        </ModalBody>
        <ModalFooter>
          <a href={url} target="blank">
            <Button color="primary">Visit Website</Button>
          </a>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ProjectModal.propTypes = {
  project: object.isRequired,
};

export default ProjectModal;
