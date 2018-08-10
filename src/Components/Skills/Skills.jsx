import React from "react";
import "./Skills.css";
import react from "../../assets/images/logos/react.svg";
import angular from "../../assets/images/logos/angular.svg";
import node from "../../assets/images/logos/node.svg";
import mongo from "../../assets/images/logos/mongo.svg";
import css from "../../assets/images/logos/css.svg";
import html from "../../assets/images/logos/html.png";
import redux from "../../assets/images/logos/redux.png";
import bootstrap from "../../assets/images/logos/bootstrap.png";
import jquery from "../../assets/images/logos/jquery.svg";
import js from "../../assets/images/logos/js.svg";

export default function SkillIcons() {
  return (
    <div className="skills-container">
      <div>
        <h1 style={{ color: "white", margin: 0 }}>Skills</h1>
        <div className="skill-icons">
          <img className="skill-picture" src={js} alt="logo" />
          <p>JavaScript</p>
          <img className="skill-picture" src={react} alt="logo" />
          <p>React</p>
          <img className="skill-picture" src={angular} alt="logo" />
          <p>Angular</p>
          <img className="skill-picture" src={css} alt="logo" />
          <p>CSS</p>
          <img className="skill-picture" src={html} alt="logo" />
          <p>HTML5</p>
          <img className="skill-picture" src={node} alt="logo" />
          <p>Node.js</p>
          <img className="skill-picture" src={mongo} alt="logo" />
          <p>MongoDB</p>
          <img className="skill-picture" src={redux} alt="logo" />
          <p>Redux</p>
          <img className="skill-picture" src={bootstrap} alt="logo" />
          <p>Bootstrap</p>
          <img className="skill-picture" src={jquery} alt="logo" />
          <p>jQuery</p>
        </div>
      </div>
    </div>
  );
}
