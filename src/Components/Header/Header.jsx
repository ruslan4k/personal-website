import React, { useEffect, useState } from 'react';
import {
  FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn,
} from 'react-icons/fa';
import { FiX, FiMenu } from 'react-icons/fi';
import Scrollspy from 'react-scrollspy';
import cn from 'classnames';
import './Header.scss';

const SocialShare = [
  { Social: <FaFacebookF />, link: 'https://www.facebook.com/' },
  { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
  { Social: <FaInstagram />, link: 'https://www.instagram.com/' },
  { Social: <FaTwitter />, link: 'https://twitter.com/' },
];
const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMenuOpened, setMenuOpened] = useState(false);
  const handleScroll = () => {
    const value = window.scrollY;
    setSticky(value > 100);
  };
  const menuTrigger = () => setMenuOpened(true);

  const cLoseMenuTrigger = () => setMenuOpened(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    { key: '#home', label: 'Home' },
    { key: '#about', label: 'About' },
    { key: '#skills', label: 'Skills' },
    { key: '#projects', label: 'Projects' },
    { key: '#contact', label: 'Contact' },
  ];
  return (
    <header className={cn('header-area header-style-two header--fixed', { sticky: isSticky })}>
      <div className={cn('header-wrapper', { 'menu-open': isMenuOpened })}>
        <div
          className={cn('header-left d-flex align-items-center', {
            'color-black': isSticky,
          })}
        >
          <nav className="mainmenunav d-lg-block ml--50">
            <Scrollspy
              className={cn('mainmenu', {
                'color-black': isSticky,
              })}
              items={['home', 'about', 'service', 'portfolio', 'blog', 'contact']}
              currentClassName="is-current"
              offset={-200}
            >
              {links.map((item) => (
                <li key={item.key}>
                  <a href="#home">{item.label}</a>
                </li>
              ))}
            </Scrollspy>
          </nav>
        </div>
        <div className="header-right">
          <div className="social-share-inner">
            <ul
              className={cn('social-share social-style--2 d-flex justify-content-start liststyle', {
                'color-black': isSticky,
              })}
            >
              {SocialShare.map((val) => (
                <li key={val.link}>
                  <a href={`${val.link}`}>{val.Social}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="header-btn">
            <a className="rn-btn" href="#">
              <span>Open CV</span>
            </a>
          </div>
          <div className="humburger-menu d-block d-lg-none pl--20">
            <span onClick={menuTrigger} className="menutrigger text-white">
              <FiMenu />
            </span>
          </div>
          <div className="close-menu d-block d-lg-none">
            <span onClick={cLoseMenuTrigger} className="closeTrigger">
              <FiX />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
