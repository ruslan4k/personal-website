import React from "react";
import "./Portfolio.css";
import activityTimerImg from "../../assets/images/projects/ActivityTimer/dayActivitiesMobile.png";
import autoAppletImg from "../../assets/images/projects/autoApplet/settingsMobile_pixel_quite_black_portrait.png";
import Modal from "../Portfolio/Modal/Modal";

var ActivityTimerFolder = require.context(
  "../../assets/images/projects/ActivityTimer/",
  false,
  /.*\.png$/
);
var AutoAppletFolder = require.context(
  "../../assets/images/projects/autoApplet/",
  false,
  /.*\.png$/
);
var ActivityTimerImages = [];
var AutoAppletImages = [];
ActivityTimerFolder.keys().forEach(function(image) {
  ActivityTimerImages.push({
    src: ActivityTimerFolder(image),
    caption: "",
    altText: ""
  });
});
AutoAppletFolder.keys().forEach(function(image) {
  AutoAppletImages.push({
    src: AutoAppletFolder(image),
    caption: "",
    altText: ""
  });
});

const projects = [
  {
    images: ActivityTimerImages,
    title: "Activity Timer",
    description: "",
    technologies: "",
    url: ""
  },
  {
    images: AutoAppletImages,
    title: "AutoApplet",
    description: "",
    technologies: "",
    url: ""
  }
];

const items = [
  {
    src: activityTimerImg,
    altText: "",
    caption: ""
  },
  {
    src: autoAppletImg,
    altText: "",
    caption: ""
  }
];

export default class Portfolio extends React.Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
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
                <h4>Activity Timer</h4>
                <p>Time Tracker app</p>
                <p>Angular, Node.js, Expres.js, MongoDB, Material Design</p>
                <Modal project={projects[0]} buttonLabel="Show Details" />
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
                <Modal project={projects[1]} buttonLabel="Show Details" />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
