import React from "react";
import "./Portfolio.css";
import activityTimerImg from "../../assets/images/projects/ActivityTimer/dayActivitiesMobile.png";
import autoAppletImg from "../../assets/images/projects/autoApplet/settingsMobile_pixel_quite_black_portrait.png";

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <img className="portfolio-picture" src={activityTimerImg} alt="logo" />
      <h1>Activity Timer</h1>
      <p>Time Tracker app</p>
      <p>Angular, Node.js, Expres.js, MongoDB, Material Design</p>
      <img className="portfolio-picture" src={autoAppletImg} alt="logo" />
      <h1>AutoApplet</h1>
      <p>Web based Service for task automation</p>
      <p>React, Redux, Expres.js, MongoDB, Material-UI</p>
    </div>
  );
}
