/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ProjectModal.scss';
import { bool, func, object } from 'prop-types';
import Gallery from '../Gallery/Gallery';

const ProjectModal = ({ project, isModalOpen, toggleModalState, changeLightBoxStatus }) => {
  const { images, title, description, url, githubUrl } = project;

  return (
    <div>
      <Modal size="xl" centered isOpen={isModalOpen} toggle={toggleModalState}>
        <ModalHeader toggle={toggleModalState}>{title}</ModalHeader>
        <ModalBody>{description}</ModalBody>
        <ModalBody>
          <Gallery images={images} changeLightBoxStatus={changeLightBoxStatus} />
        </ModalBody>
        <ModalFooter>
          {url && (
            <a href={url} target="blank">
              <Button color="primary">Visit Website</Button>
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="blank">
              <Button color="secondary">Github</Button>
            </a>
          )}
          <Button color="info" onClick={toggleModalState}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ProjectModal.propTypes = {
  project: object.isRequired,
  isModalOpen: bool.isRequired,
  toggleModalState: func.isRequired,
  changeLightBoxStatus: func.isRequired,
};

export default ProjectModal;
