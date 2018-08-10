import React from "react";
import "./Skills.css";
import react from "../../assets/react.svg";
import angular from "../../assets/angular.svg";
import node from "../../assets/node.svg";
import mongo from "../../assets/mongo.svg";
import css from "../../assets/css.svg";
import html from "../../assets/html.png";
import redux from "../../assets/redux.png";
import bootstrap from "../../assets/bootstrap.png";
import jquery from "../../assets/jquery.svg";

export default function SkillIcons() {
  return (
    <div className="skills-container">
      <div>
        <h1 style={{ color: "white", margin: 0 }}>Skills</h1>
        <div className="skill-icons">
          <img className="skill-picture" src={react} alt="logo" />
          <img className="skill-picture" src={angular} alt="logo" />
          <img className="skill-picture" src={css} alt="logo" />
          <img className="skill-picture" src={html} alt="logo" />
          <img className="skill-picture" src={node} alt="logo" />
          <img className="skill-picture" src={mongo} alt="logo" />
          <img className="skill-picture" src={redux} alt="logo" />
          <img className="skill-picture" src={bootstrap} alt="logo" />
          <img className="skill-picture" src={jquery} alt="logo" />
        </div>
      </div>
    </div>
  );
}
