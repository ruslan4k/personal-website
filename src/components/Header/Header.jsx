import React, { useEffect, useState } from 'react';
import { FaLinkedinIn, FaGithub, FaCodepen } from 'react-icons/fa';
import { FiX, FiMenu } from 'react-icons/fi';
import Scrollspy from 'react-scrollspy';
import cn from 'classnames';
import './Header.scss';
import { GITHUB_LINK, LINKEDIN_LINK, CODEPEN_LINK } from '../../constants/socialLinks';

const socialShareIcons = [
  { icon: <FaLinkedinIn />, link: LINKEDIN_LINK },
  { icon: <FaGithub />, link: GITHUB_LINK },
  { icon: <FaCodepen />, link: CODEPEN_LINK },
];
const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMenuOpened, setMenuOpened] = useState(false);
  const handleScroll = () => {
    const value = window.scrollY;
    setSticky(value > 50);
  };
  const menuTrigger = () => {
    document.documentElement.classList.add('bodyLocked');
    setMenuOpened(true);
  };

  const cLoseMenuTrigger = () => {
    setMenuOpened(false);
    document.documentElement.classList.remove('bodyLocked');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'skills', label: 'Skills' },
    { key: 'projects', label: 'Projects' },
    { key: 'contact', label: 'Contact' },
  ];

  const isStickyHeader = isSticky || isMenuOpened;
  return (
    <header className={cn('header-area header', { sticky: isStickyHeader })}>
      <div className={cn('header-wrapper', { 'menu-open': isMenuOpened })}>
        <div
          className={cn('header-left d-flex align-items-center', {
            'color-black': isStickyHeader,
          })}
        >
          <nav className="mainmenunav d-lg-block ml--50">
            <Scrollspy
              className={cn('mainmenu', {
                'color-black': isStickyHeader,
              })}
              items={links.map((link) => link.key)}
              currentClassName="is-current"
              offset={-200}
            >
              {links.map((item) => (
                <li key={item.key}>
                  <a onClick={cLoseMenuTrigger} href={`#${item.key}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </Scrollspy>
          </nav>
        </div>
        <div className="header-right">
          <div className="social-share-inner">
            <ul
              className={cn('social-share social-style--2 d-flex justify-content-start liststyle', {
                'color-black': isSticky || isMenuOpened,
              })}
            >
              {socialShareIcons.map((val) => (
                <li key={val.link}>
                  <a href={`${val.link}`} rel="noreferrer" target="_blank">
                    {val.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="header-btn">
            <a
              target="_blank"
              rel="noreferrer"
              className="rn-btn"
              href="https://storage.rk-projects.dev/Ruslan_Khametov%20_Full-Stack_Software_Engineer.pdf"
            >
              <span>Open CV</span>
            </a>
          </div>
          <div className="humburger-menu d-block d-lg-none pl--20">
            <span role="button" tabIndex={-1} onKeyDown={menuTrigger} onClick={menuTrigger} className="menutrigger text-white">
              <FiMenu />
            </span>
          </div>
          <div className="close-menu d-block d-lg-none">
            <span role="button" tabIndex={-1} onKeyDown={cLoseMenuTrigger} onClick={cLoseMenuTrigger} className="closeTrigger">
              <FiX />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
