import React from 'react';
import propTypes from 'prop-types';

import css from './description.module.css';

const Description = ({ description }) => {
  if (!description) {
    return null;
  }

  return <p className={css.description}>{description}</p>;
};

Description.propTypes = {
  description: propTypes.string,
};

export default Description;
