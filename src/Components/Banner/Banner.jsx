import React, { useRef } from 'react';
import TextLoop from 'react-text-loop';
import ContactIcons from '../ContactIcons/ContactIcons';
import './Banner.scss';

export default function Banner() {
  const videoRef = useRef(null);
  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.7;
  };
  return (
    <div className="banner-container">
      <div className="video-background">
        <video
          onCanPlay={() => setPlayBack()}
          y
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          src={`${'/assets/images/service/skyCamp.mp4'}`}
        />
      </div>
      <div className="banner">
        <div className="d-inline-flex flex-column justify-content-center align-items-center">
          <h2>Ruslan Khametov</h2>
          <div className="testsa">
            <TextLoop className="theme-color text-loop">
              <span>Full Stack</span>
              <span>Javascript</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>SQL</span>
              <span>NoSQL</span>
            </TextLoop>
          </div>

          <ContactIcons />
        </div>
      </div>
    </div>
  );
}
