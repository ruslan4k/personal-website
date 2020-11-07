import React, { useRef, useState } from 'react';
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
  const [isVideoAvailable, setVideoStatus] = useState(false);

  return (
    <div id="home" className="banner-container">
      <div className="video-background">
        <video
          onCanPlay={setPlayBack}
          onLoadedData={() => {
            setVideoStatus(true);
            document.getElementsByClassName('fullscreen-loader')[0].classList.add('hidden');
            document.documentElement.classList.remove('bodyLocked');
          }}
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          src={videoBackground}
        />
      </div>
      {isVideoAvailable && (
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
      )}
    </div>
  );
}
