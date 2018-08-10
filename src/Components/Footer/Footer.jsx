import React from "react";
import LinkedInIcon from "mdi-react/LinkedinBoxIcon";
import WordpressIcon from "mdi-react/WordpressIcon";
import Github from "mdi-react/GithubCircleIcon";
import CodepenIcon from "mdi-react/CodepenIcon";
import GmailIcon from "mdi-react/GmailIcon";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <a target="blank" href="https://www.linkedin.com/in/ruslan-khametov/">
        <GmailIcon size={36} className="social-icon linkedIn" />
      </a>
      <p>Contact me via email</p>
      <a target="blank" href="https://www.linkedin.com/in/ruslan-khametov/">
        <LinkedInIcon size={36} className="social-icon linkedIn" />
      </a>
      <p>View my LinkedIn profile</p>
      <a target="blank" href="https://github.com/ruslan4k/">
        <Github size={36} className="social-icon github" />
      </a>
      <p>View me on GitHub</p>
      <h4>Copyright © 2018 Ruslan Khametov.</h4>
    </div>
  );
}
