import React, { useState } from 'react';
import Slider from 'react-slick';
import { portfolioSlick } from './config';
import activityTimerImg from '../../assets/images/projects/activityTimer/4.png';
import fakeDataGeneratorImg from '../../assets/images/projects/fakeDataGenerator/4.jpg';
import autoAppletImg from '../../assets/images/projects/autoApplet/6.png';
import personalWebsiteImg from '../../assets/images/projects/website/1.jpg';
import ProjectModal from './ProjectModal/ProjectModal';
import './Portfolio.scss';

const ActivityTimerFolder = require.context('../../assets/images/projects/activityTimer/', false, /.*\.png$/);
const AutoAppletFolder = require.context('../../assets/images/projects/autoApplet/', false, /.*\.png$/);
const WebsiteFolder = require.context('../../assets/images/projects/website/', false, /.*\.jpg$/);
const FakeDataGeneratorFolder = require.context('../../assets/images/projects/fakeDataGenerator', false, /.*\.jpg$/);
const ActivityTimerImages = [];
const AutoAppletImages = [];
const FakeDataGeneratorImages = [];
const WebsiteImages = [];
ActivityTimerFolder.keys().forEach((image) => {
  const img = new Image();
  const src = ActivityTimerFolder(image);
  img.src = src;
  ActivityTimerImages.push({
    image: img,
    caption: '',
    altText: '',
  });
});
AutoAppletFolder.keys().forEach((image) => {
  const img = new Image();
  const src = AutoAppletFolder(image);
  img.src = src;
  AutoAppletImages.push({
    image: img,
    caption: '',
    altText: '',
  });
});

FakeDataGeneratorFolder.keys().forEach((image) => {
  const img = new Image();
  const src = FakeDataGeneratorFolder(image);
  img.src = src;
  FakeDataGeneratorImages.push({
    image: img,
    caption: '',
    altText: '',
  });
});

WebsiteFolder.keys().forEach((image) => {
  const img = new Image();
  const src = WebsiteFolder(image);
  img.src = src;
  WebsiteImages.push({
    image: img,
    caption: '',
    altText: '',
  });
});

const projects = [
  {
    image: 'image-1',
    images: FakeDataGeneratorImages,
    title: 'Fake Data Generator',
    year: 2020,
    shortDescription: 'Web based data mocking tool',
    thumbnail: fakeDataGeneratorImg,
    description: 'Generates mock data to test your app. It helps you generate random data in various ways.',
    technologies: 'Node.js, Express.js, MongoDB, React, Redux-Saga, Material UI',
    url: 'https://fakedata.rk-projects.dev/',
  },
  {
    image: 'image-4',
    images: WebsiteImages,
    title: 'My Website',
    year: 2020,
    shortDescription: 'Personal Website',
    thumbnail: personalWebsiteImg,
    description: '',
    technologies: 'React.js, Bootstrap, Cloud Functions, GitHub actions',
  },
  {
    image: 'image-2',
    images: ActivityTimerImages,
    title: 'Activity Timer',
    year: 2018,
    shortDescription: 'Time Tracker app',
    thumbnail: activityTimerImg,
    description:
      'Simple time-tracking application.' +
      ' Helps to figure out how many hours you work each day. Counts how many productive hours you had each week.',
    technologies: 'Angular, Node.js, Express.js, MongoDB, Material Design',
  },
  {
    image: 'image-3',
    images: AutoAppletImages,
    title: 'AutoApplet',
    year: 2018,
    shortDescription: 'Web based Service for task automation',
    thumbnail: autoAppletImg,
    description: 'AutoApplet is Web based service for task automation.',
    technologies: 'React, Redux, Express.js, MongoDB, Material-UI',
  },
];

const Portfolio = () => {
  const [isModalOpen, setOpenModal] = useState(false);
  const [isLightBoxOpen, setLightBoxOpen] = useState(false);
  const [currentProject, setProject] = useState(projects[0]);
  const toggleModalState = () => {
    if (isLightBoxOpen) return;
    setOpenModal((state) => !state);
  };

  const changeLightBoxStatus = () => {
    setLightBoxOpen((state) => !state);
  };

  const handleClickProject = (project) => {
    setProject(project);
    toggleModalState();
  };

  return (
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
      <div className="wrapper portfolio-carousel-inner mb--55">
        <div className="portfolio-slick-activation mt--30 mt_sm--30">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Slider {...portfolioSlick}>
            {projects.map((projectItem) => (
              <div
                tabIndex={-1}
                role="button"
                className="portfolio portfolio-interior-design"
                key={projectItem.image}
                onKeyDown={() => handleClickProject(projectItem)}
                onClick={() => handleClickProject(projectItem)}
              >
                <div className="thumbnail-inner">
                  <div className={`thumbnail ${projectItem.image}`} />
                  <div className={`bg-blr-image ${projectItem.image}`} />
                </div>
                <div className="content">
                  <div className="inner d-flex flex-column align-items-start">
                    <p>{projectItem.shortDescription}</p>
                    <h4 className="text-white">{projectItem.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <ProjectModal
        project={currentProject}
        isModalOpen={isModalOpen}
        isLightBoxOpen={isLightBoxOpen}
        changeLightBoxStatus={changeLightBoxStatus}
        toggleModalState={toggleModalState}
      />
    </div>
  );
};

export default Portfolio;
