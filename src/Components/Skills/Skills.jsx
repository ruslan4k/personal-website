import React from 'react';
import {
  FiLayers, FiDownloadCloud, FiCode, FiDatabase, FiLayout, FiTrendingUp,
} from 'react-icons/fi';
import './Skills.scss';

const ServiceList = [
  {
    icon: <FiLayout />,
    title: 'Front-end',
    description: 'React, Redux, JavaScript, HTML, CSS',
  },
  {
    icon: <FiLayers />,
    title: 'Back-end',
    description: 'Node JS, ExpressJS, Firebase, Django',
  },
  {
    icon: <FiDatabase />,
    title: 'Databases',
    description: 'Firestore, MongoDB. DynamoDB, PostgreSQL',
  },
  {
    icon: <FiDownloadCloud />,
    title: 'Deployment',
    description: 'Google Cloud Platform, AWS, Firebase, Heroku, Jenkins',
  },
  {
    icon: <FiCode />,
    title: 'Languages',
    description: 'Javascript, Python',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Other Technologies',
    description: 'Sendgrid, Single Sign-On with SCIM',
  },
];
const Skills = () => (
  <div id="skills" className="service-area ptb--120 bg_color--5">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center mb--30">
            <h2>My Skills</h2>
            <p>
              There are many technologies that I have experience with.
            </p>
          </div>
        </div>
      </div>
      <div className="row service-one-wrapper">
        {ServiceList.map((val) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={val.title}>
            <div>
              <div className="service service_style">
                <div className="icon">{val.icon}</div>
                <div className="content">
                  <h3 className="title">{val.title}</h3>
                  <p>{val.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
