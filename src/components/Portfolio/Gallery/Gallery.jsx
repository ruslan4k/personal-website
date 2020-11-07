/* eslint-disable react/jsx-curly-newline */
import { array, func } from 'prop-types';
import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  handleClickImage = (i) => {
    const { changeLightBoxStatus } = this.props;
    this.setState({ photoIndex: i, isOpen: true }, changeLightBoxStatus());
  };

  renderGallery() {
    const { images } = this.props;
    return images.map((imageProps, i) => (
      <div
        role="button"
        tabIndex={-1}
        className="col-4 col-md-4 col-lg-3"
        key={imageProps.image.src}
        onKeyDown={() => this.handleClickImage(i)}
        onClick={() => this.handleClickImage(i)}
      >
        <img src={imageProps.image.src} className="gallery-item" alt="gallery-item" />
      </div>
    ));
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const { images, changeLightBoxStatus } = this.props;
    return (
      <div className="row">
        {this.renderGallery()}
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].image.src}
            nextSrc={images[(photoIndex + 1) % images.length].image.src}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].image.src}
            onCloseRequest={() => this.setState({ isOpen: false }, changeLightBoxStatus())}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

Gallery.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  images: array.isRequired,
  changeLightBoxStatus: func.isRequired,
};
