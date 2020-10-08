import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ src, className }) {
  return (
    <img className={className} src={`/assets/css/images/${src}`} alt="logo" />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};
