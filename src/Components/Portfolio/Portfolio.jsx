import React from 'react';
import './Portfolio.css';
import activityTimerImg from '../../assets/images/projects/ActivityTimer/4.png';
import autoAppletImg from '../../assets/images/projects/autoApplet/settingsMobile_pixel_quite_black_portrait.png';
import ProjectModal from './ProjectModal/ProjectModal';

const ActivityTimerFolder = require.context('../../assets/images/projects/ActivityTimer/', false, /.*\.png$/);
const AutoAppletFolder = require.context('../../assets/images/projects/autoApplet/', false, /.*\.png$/);
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
    title: 'Fake Data Generator',
    year: 2020,
    shortDescription: 'Fake Data Generator',
    thumbnail: activityTimerImg,
    description:
      'Application to help you control time user spends working / resting.'
      + ' Counts how much hours user works / rests each day. Counts how many productive hours user has each week.',
    technologies: 'Node.js, Express.js, MongoDB, React, Redux-Saga, Material UI',
    url: 'https://activity-timer.herokuapp.com/',
  },
  {
    images: ActivityTimerImages,
    title: 'Activity Timer',
    year: 2018,
    shortDescription: 'Time Tracker app',
    thumbnail: activityTimerImg,
    description:
      'Application to help you control time user spends working / resting.'
      + ' Counts how much hours user works / rests each day. Counts how many productive hours user has each week.',
    technologies: 'Angular, Node.js, Express.js, MongoDB, Material Design',
    url: 'https://activity-timer.herokuapp.com/',
  },
  {
    images: AutoAppletImages,
    title: 'AutoApplet',
    year: 2018,
    shortDescription: 'Web based Service for task automation',
    thumbnail: autoAppletImg,
    description: 'AutoApplet is Web based service for task automation using MERN stack.',
    technologies: 'React, Redux, Express.js, MongoDB, Material-UI',
    url: 'https://auto-applet.herokuapp.com/',
  },
];

const Portfolio = () =>
  (
    <div className="portfolio-container container">
      <h2>Side Projects</h2>
      <div className="row justify-content-start justify-content-md-center">
        {projects.map((projectItem) => (
          <div className="item-wrap col-12 col-sm-6 col-lg-4">
            <div className="overlay">
              <img className="img-fluid" src={projectItem.thumbnail} alt="logo" />
              <div className="item-text-wrap">
                <h4>{`${projectItem.title} (${projectItem.year})`}</h4>
                <p>{projectItem.shortDescription}</p>
                <p>{projectItem.technologies}</p>
                <ProjectModal project={projectItem} buttonLabel="Show Details" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
export default Portfolio;
