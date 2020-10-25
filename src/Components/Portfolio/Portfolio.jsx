import React from 'react';
import Slider from 'react-slick';
import { portfolioSlick } from './config';
import activityTimerImg from '../../assets/images/projects/ActivityTimer/4.png';
import autoAppletImg from '../../assets/images/projects/autoApplet/settingsMobile_pixel_quite_black_portrait.png';
import ProjectModal from './ProjectModal/ProjectModal';
import './Portfolio.scss';

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
    image: 'image-1',
    images: ActivityTimerImages,
    title: 'Fake Data Generator',
    year: 2020,
    shortDescription: 'Fake Data Generator',
    thumbnail: activityTimerImg,
    description:
      'Application to help you control time user spends working / resting.' +
      ' Counts how much hours user works / rests each day. Counts how many productive hours user has each week.',
    technologies: 'Node.js, Express.js, MongoDB, React, Redux-Saga, Material UI',
    url: 'https://activity-timer.herokuapp.com/',
  },
  {
    image: 'image-2',
    images: ActivityTimerImages,
    title: 'Activity Timer',
    year: 2018,
    shortDescription: 'Time Tracker app',
    thumbnail: activityTimerImg,
    description:
      'Application to help you control time user spends working / resting.' +
      ' Counts how much hours user works / rests each day. Counts how many productive hours user has each week.',
    technologies: 'Angular, Node.js, Express.js, MongoDB, Material Design',
    url: 'https://activity-timer.herokuapp.com/',
  },
  {
    image: 'image-3',
    images: AutoAppletImages,
    title: 'AutoApplet',
    year: 2018,
    shortDescription: 'Web based Service for task automation',
    thumbnail: autoAppletImg,
    description: 'AutoApplet is Web based service for task automation using MERN stack.',
    technologies: 'React, Redux, Express.js, MongoDB, Material-UI',
    url: 'https://auto-applet.herokuapp.com/',
  },
  {
    image: 'image-3',
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

const Portfolio = () => (
  <div id="projects" className="portfolio-area ptb--120 bg_color--1">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-title text-left service-style--3 mb--30">
            <h2 className="title">My Projects</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="wrapper portfolio-sacousel-inner mb--55">
      <div className="portfolio-slick-activation mt--30 mt_sm--30">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider {...portfolioSlick}>
          {projects.map((projectItem) => (
            <div className="portfolio portfolio-interior-design" key={projectItem.image}>
              <div className="thumbnail-inner">
                <div className={`thumbnail ${projectItem.image}`} />
                <div className={`bg-blr-image ${projectItem.image}`} />
              </div>
              <div className="content">
                <div className="inner d-flex flex-column align-items-start">
                  <p>{projectItem.shortDescription}</p>
                  <h4>
                    <a href="/portfolio-details">{projectItem.title}</a>
                  </h4>
                  <ProjectModal project={projectItem} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>
);

export default Portfolio;
