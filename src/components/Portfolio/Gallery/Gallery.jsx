/* eslint-disable react/jsx-curly-newline */
import { array, func } from 'prop-types';
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Gallery = ({ changeLightBoxStatus, images }) => {
  const [{ photoIndex, isOpen }, setState] = useState({
    photoIndex: 0,
    isOpen: false,
  });

  const handleClickImage = (i) => {
    setState({ photoIndex: i, isOpen: true }, changeLightBoxStatus());
  };

  return (
    <div className="row">
      {images.map((imageProps, i) => (
        <div
          role="button"
          tabIndex={-1}
          className="col-4 col-md-4 col-lg-3"
          key={imageProps.image.src}
          onKeyDown={() => handleClickImage(i)}
          onClick={() => handleClickImage(i)}
        >
          <img src={imageProps.image.src} className="gallery-item" alt="gallery-item" />
        </div>
      ))}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].image.src}
          nextSrc={images[(photoIndex + 1) % images.length].image.src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].image.src}
          onCloseRequest={() => setState({ isOpen: false }, changeLightBoxStatus())}
          onMovePrevRequest={() =>
            setState({
              photoIndex: (photoIndex + images.length - 1) % images.length,
              isOpen: true,
            })
          }
          onMoveNextRequest={() =>
            setState({
              photoIndex: (photoIndex + 1) % images.length,
              isOpen: true,
            })
          }
        />
      )}
    </div>
  );
};

Gallery.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  images: array.isRequired,
  changeLightBoxStatus: func.isRequired,
};

export default Gallery;
