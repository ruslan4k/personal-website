import React, { useRef } from 'react';
import Particles from 'react-particles-js';
import TextLoop from 'react-text-loop';
import ContactIcons from '../ContactIcons/ContactIcons';
import './Banner.scss';
import videoBackground from '../../assets/videos/skyCamp.mp4';

const skills = ['Full Stack', 'Javascript', 'React.js', 'Node.js', 'SQL', 'NoSQL', 'Firebase'];

export default function Banner() {
  const videoRef = useRef(null);
  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.7;
  };

  return (
    <div id="home" className="banner-container">
      <div className="video-background">
        <Particles />
        <video preload="none" onCanPlay={setPlayBack} ref={videoRef} autoPlay muted playsInline loop src={videoBackground}>
          <source src={videoBackground} type="video/mp4" />
        </video>
      </div>
      <div className="banner">
        <div className="d-inline-flex flex-column justify-content-center align-items-center">
          <h2>Ruslan Khametov</h2>
          <div className="textLoopsSkills">
            <TextLoop className="theme-color text-loop">
              {skills.map((skillItem) => (
                <span key={skillItem}>{skillItem}</span>
              ))}
            </TextLoop>
          </div>

          <ContactIcons />
        </div>
      </div>
    </div>
  );
}
