import React from 'react';
import './ContactIcons.css';
import { AiOutlineCodepenCircle, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { GITHUB_LINK, LINKEDIN_LINK, CODEPEN_LINK } from '../../constants/socialLinks';

export default function ContactIcons() {
  return (
    <div className="social-icons">
      <a target="blank" href={LINKEDIN_LINK}>
        <AiOutlineLinkedin size={36} className="social-icon linkedIn" />
      </a>
      <a target="blank" href={GITHUB_LINK}>
        <AiOutlineGithub size={36} className="social-icon github" />
      </a>
      <a target="blank" href={CODEPEN_LINK}>
        <AiOutlineCodepenCircle size={36} className="social-icon" />
      </a>
    </div>
  );
}
