import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';

import smilyFace from '../../public/images/icons/smily-face.svg';
import food from '../../public/images/icons/food.svg';
import charges from '../../public/images/icons/charges.svg';

import css from './SVGIcon.module.css';

const iconMap = {
  'smily-face': smilyFace,
  food,
  charges,
};

const SVGIcon = ({ icon }) => (
  <SVGInline svg={iconMap[icon]} component='div' className={css.icon} />
);

SVGIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SVGIcon.defaultProps = {
  className: '',
};

export default SVGIcon;
