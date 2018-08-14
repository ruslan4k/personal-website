import React from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  renderGallery() {
    const { changeLightBoxStatus } = this.props;
    const { images } = this.props;
    return images.map((image, i) => {
      return (
        <div
          className="col-4 col-md-4 col-lg-3"
          key={i}
          onClick={() =>
            this.setState({ photoIndex: i, isOpen: true }, changeLightBoxStatus())
          }
        >
          <img src={image.src} className="gallery-item" />
        </div>
      );
    });
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    const { images, changeLightBoxStatus } = this.props;
    return (
      <div className="row">
        {this.renderGallery()}
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length].src
            }
            onCloseRequest={() =>
              this.setState({ isOpen: false }, changeLightBoxStatus())
            }
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    );
  }
}
