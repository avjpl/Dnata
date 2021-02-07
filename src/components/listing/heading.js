import React from 'react';
import propTypes from 'prop-types';

import css from './heading.module.css';

const Heading = ({ name }) => {
  if (!name) {
    return null;
  }

  return <h1 className={css.heading}>{name}</h1>;
};

Heading.propTypes = {
  name: propTypes.string,
};

export default Heading;
