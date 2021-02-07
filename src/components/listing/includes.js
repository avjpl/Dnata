import React from 'react';
import propTypes from 'prop-types';

import SVGIcon from '../icon/SVGIcon';

import css from './includes.module.css';

const Includes = ({ includes }) => {
  if (!Object.keys(includes)) {
    return null;
  }

  return (
    <div className={css.includes}>
      <p className={css.includes__text}>Price includes:</p>

      <ul>
        {Object.entries(includes).map(([key, value]) => (
          <li key={key} className={css.includes__item}>
            <SVGIcon icon={key} />
            <span className={css.includes__item__text}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Includes.propTypes = {
  includes: propTypes.object,
};

export default Includes;
