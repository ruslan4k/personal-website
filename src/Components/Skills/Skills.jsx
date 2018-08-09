import React from "react";
import "./Skills.css";
// import ReactIcon from "mdi-react/ReactIcon";
// import CssIcon from "mdi-react/LanguageCss3Icon";
// import AngularIcon from "mdi-react/AngularIcon";
// import HtmlIcon from "mdi-react/LanguageHtml5Icon";
// import NodejsIcon from "mdi-react/NodejsIcon";
// import JavascriptIcon from "mdi-react/LanguageJavascriptIcon";
import react from '../../assets/react.svg'
import angular from '../../assets/angular.svg'
import node from '../../assets/node.svg'
import mongo from '../../assets/mongo.svg'
import css from '../../assets/css.svg'
import html from '../../assets/html.png'
import redux from '../../assets/redux.png'
import bootstrap from '../../assets/bootstrap.png'
import jquery from '../../assets/jquery.svg'


export default function SkillIcons() {
  return (
    <div style={{ textAlign: "center", marginTop: '5em' }}>
      <h1 style={{ color: "white", margin: 0 }}>Skills</h1>
      <div className="skill-icons" style={{verticalAlign: 'middle',  display: 'inline-block'}}>
        <img style={{height: '50px', width: '50'}}src={react} alt='logo' />
        <img style={{height: '50px', width: '50'}}src={angular} alt='logo' />
        <img style={{height: '50px', width: '50'}}src={css} alt='logo' />
        <img style={{height: '50px', width: '40'}}src={html} alt='logo' />
        <img style={{height: '50px', width: '50'}}src={node} alt='logo' />
        <img style={{height: '50px', width: '50'}}src={mongo} alt='logo' />
        <img style={{height: '50px', width: '50'}}src={redux} alt='logo' />
        <img style={{height: '50px', width: '50'}}src={bootstrap} alt='logo' />
        <img style={{height: '50px', width: '50'}}src={jquery} alt='logo' />

        {/* <a style={{ margint: 0 }} target="blank" href="https://www.linkedin.com/in/ruslan-khametov/">
          <ReactIcon size={48} className="skill-icon react" />
        </a>
        <a target="blank" href="https://github.com/ruslan4k/">
          <HtmlIcon size={48} className="skill-icon html" />
        </a>
        <a target="blank" href="https://khametov.wordpress.com/">
          <AngularIcon size={48} className="skill-icon angular" />
        </a>
        <a target="blank" href="https://codepen.io/ruslan4k/pens/public/">
          <NodejsIcon size={48} className="skill-icon node" />
        </a>
        <a target="blank" href="https://codepen.io/ruslan4k/pens/public/">
          <JavascriptIcon size={48} className="skill-icon js" />
        </a>
        <a target="blank" href="https://codepen.io/ruslan4k/pens/public/">
          <CssIcon size={48} className="skill-icon" />
        </a> */}
      </div>
    </div>
  );
}
