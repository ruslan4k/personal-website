import React from 'react';
import './Portfolio.css';
import activityTimerImg from '../../assets/images/projects/ActivityTimer/4.png';
import autoAppletImg from '../../assets/images/projects/autoApplet/settingsMobile_pixel_quite_black_portrait.png';
import ProjectModal from './ProjectModal/ProjectModal';

const ActivityTimerFolder = require.context(
  '../../assets/images/projects/ActivityTimer/',
  false,
  /.*\.png$/,
);
const AutoAppletFolder = require.context(
  '../../assets/images/projects/autoApplet/',
  false,
  /.*\.png$/,
);
const ActivityTimerImages = [];
const AutoAppletImages = [];
ActivityTimerFolder.keys().forEach((image) => {
  ActivityTimerImages.push({
    src: ActivityTimerFolder(image),
    caption: '',
    altText: '',
  });
});
AutoAppletFolder.keys().forEach((image) => {
  AutoAppletImages.push({
    src: AutoAppletFolder(image),
    caption: '',
    altText: '',
  });
});

const projects = [
  {
    images: ActivityTimerImages,
    title: 'Activity Timer',
    description: 'Application to help you control time user spends working / resting. Counts how much hours user works / rests each day. Counts how many productive hours user has each week.',
    technologies: 'Angular, Node.js, Expres.js, MongoDB, Material Design',
    url: 'https://activity-timer.herokuapp.com/',
  },
  {
    images: AutoAppletImages,
    title: 'AutoApplet',
    description: 'AutoApplet is Web based service for task automation using MERN stack.',
    technologies: 'React, Redux, Expres.js, MongoDB, Material-UI',
    url: 'https://auto-applet.herokuapp.com/',
  },
];

export default class Portfolio extends React.Component {
  state = {
    ProjectModal: false,
  };

  toggle = () => {
    this.setState({
      ProjectModal: !this.state.ProjectModal,
    });
  };

  render() {
    return (
      <div className="portfolio-container container">
        <h1>Projects</h1>
        <div className="row justify-content-start justify-content-md-center">
          <div className="item-wrap col-12 col-sm-6 col-lg-4">
            <a className="overlay">
              <img className="img-fluid" src={activityTimerImg} alt="logo" />
              <div className="item-text-wrap">
                <h4>ActivityTimer</h4>
                <p>Time Tracker app</p>
                <p>Angular, Node.js, Expres.js, MongoDB, Material Design</p>
                <ProjectModal project={projects[0]} buttonLabel="Show Details" />
              </div>
            </a>
          </div>
          <div className="item-wrap col-12 col-sm-6 col-lg-4">
            <a className="overlay">
              <img className="img-fluid" src={autoAppletImg} alt="logo" />
              <div className="item-text-wrap">
                <h4>AutoApplet</h4>
                <p>Web based Service for task automation</p>
                <p>React, Redux, Expres.js, MongoDB, Material-UI</p>
                <ProjectModal project={projects[1]} buttonLabel="Show Details" />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
