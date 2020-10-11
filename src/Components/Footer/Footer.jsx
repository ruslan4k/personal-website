import React from 'react';
import {
  FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn,
} from 'react-icons/fa';
import './Footer.scss';

const SocialShare = [
  { Social: <FaFacebookF />, link: 'https://www.facebook.com/' },
  { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
  { Social: <FaInstagram />, link: 'https://www.instagram.com/' },
  { Social: <FaTwitter />, link: 'https://twitter.com/' },
];

const FooterTwo = () => (
  <div className="footer-style ptb--30 bg_image bg_image--1" data-black-overlay="6">
    <div className="wrapper plr--50 plr_sm--20">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <div className="inner">
            <div className="logo text-center text-sm-left mb_sm--20" />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 col-12 d-flex justify-content-center">
          <div className="inner text-center">
            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
              {SocialShare.map((val) => (
                <li key={val.link}><a href={`${val.link}`}>{val.Social}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
          <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
            <div className="text">
              <p>
                Copyright © 2020
                <br />
                {' '}
                Ruslan Khametov
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default FooterTwo;
