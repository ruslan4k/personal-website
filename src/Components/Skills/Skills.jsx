import React from "react";
import "./Skills.css";
import SkillContainer from "./SkillContainer/SkillContainer";

const LOGOS = [
  ["react.svg", "React"],
  ["angular.svg", "Angular"],
  ["css.svg", "CSS"],
  ["html.png", "HTML"],
  ["redux.png", "Redux"],
  ["bootstrap.png", "Bootstrap"],
  ["node.svg", "Node"],
  ["mongo.svg", "MongoDB"],
  ["jquery.svg", "jQuery"],
];
const IMAGE_NAME = 0;
const SKILL_TITLE = 1;

export default function SkillIcons() {
  return (
    <div className="skills-container">
      <div>
        <h1 style={{ color: "white", margin: 0 }}>Skills</h1>
        <div className="skill-icons">
          {LOGOS.map((logo, index) => (
            <SkillContainer
              key={index}
              imageName={logo[IMAGE_NAME]}
              skillTitle={logo[SKILL_TITLE]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
