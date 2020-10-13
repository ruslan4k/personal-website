import React from 'react';
import './ContactIcons.css';
import LinkedInIcon from 'mdi-react/LinkedinIcon';
import Github from 'mdi-react/GithubIcon';
import CodepenIcon from 'mdi-react/CodepenIcon';
import { GITHUB_LINK, LINKEDIN_LINK, CODEPEN_LINK } from '../../constants/socialLinks';

export default function ContactIcons() {
  return (
    <div className="social-icons">
      <a target="blank" href={LINKEDIN_LINK}>
        <LinkedInIcon size={36} className="social-icon linkedIn" />
      </a>
      <a target="blank" href={GITHUB_LINK}>
        <Github size={36} className="social-icon github" />
      </a>
      <a target="blank" href={CODEPEN_LINK}>
        <CodepenIcon size={36} className="social-icon" />
      </a>
    </div>
  );
}
