import React from "react";
import "./ContactIcons.css";
import GmailIcon from "mdi-react/GmailIcon";
import LinkedInIcon from "mdi-react/LinkedinBoxIcon";
import WordpressIcon from "mdi-react/WordpressIcon";
import Github from "mdi-react/GithubCircleIcon";
import CodepenIcon from "mdi-react/CodepenIcon";

export default function ContactIcons() {
  return (
    <div className='social-icons'>
      {/* <a><GmailIcon className='social-icon gmail' /></a> */}
      <a target='blank' href='https://www.linkedin.com/in/ruslan-khametov/'><LinkedInIcon size={36} className='social-icon linkedIn' /></a>
      <a target='blank' href='https://github.com/ruslan4k/'><Github size={36} className='social-icon github' /></a>
      <a target='blank' href='https://khametov.wordpress.com/'><WordpressIcon size={36} className='social-icon wordpress' /></a>
      <a target='blank' href='https://codepen.io/ruslan4k/pens/public/'><CodepenIcon size={36} className='social-icon' /></a>
    </div>
  );
}
