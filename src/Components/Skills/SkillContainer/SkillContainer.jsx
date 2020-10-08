import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../CommonComponents/Image';

export default function SkillContainer({ imageName, skillTitle }) {
  const folder = 'logos/';
  return (
    <div className="skill-container">
      <Image src={folder + imageName} className="skill-picture" />
      <p>{skillTitle}</p>
    </div>
  );
}

SkillContainer.propTypes = {
  imageName: PropTypes.string.isRequired,
  skillTitle: PropTypes.string.isRequired,
};
