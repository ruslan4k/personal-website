import React from 'react';
import './ContactIcons.scss';
import { AiOutlineCodepenCircle, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { GITHUB_LINK, LINKEDIN_LINK, CODEPEN_LINK } from '../../constants/socialLinks';

const links = [
  { className: 'linkedIn', Icon: AiOutlineLinkedin, link: LINKEDIN_LINK },
  { className: 'github', Icon: AiOutlineGithub, link: GITHUB_LINK },
  { className: '', Icon: AiOutlineCodepenCircle, link: CODEPEN_LINK },
];

export default function ContactIcons() {
  return (
    <div className="social-icons">
      {links.map(({ className, Icon, link }) => (
        <a key={link} target="blank" href={link}>
          <Icon size={36} className={`social-icon ${className}`} />
        </a>
      ))}
    </div>
  );
}
