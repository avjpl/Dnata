import React from 'react';
import propTypes from 'prop-types';

import SVGIcon from '../icon/SVGIcon';

import css from './reviews.module.css';

const Reviews = ({ reviews: { count, percent } }) => {
  if (!count && !percent) {
    return null;
  }

  return (
    <div className={css.reviews}>
      {count && <span className={css.reviews__percent}>{percent}</span>}
      <SVGIcon icon={'smily-face'} />
      {percent && (
        <span
          className={css.reviews__text}
        >{`(Based on ${count} reviews)`}</span>
      )}
    </div>
  );
};

Reviews.propTypes = {
  reviews: propTypes.object,
};

export default Reviews;
