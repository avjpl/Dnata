import React from 'react';
import propTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';

import css from './ratings.module.css';

const Ratings = ({ ratings }) => {
  if (!ratings) {
    return null;
  }

  return (
    <div className={css.ratings}>
      <ReactStars
        edit={false}
        count={5}
        value={ratings}
        size={24}
        activeColor='#ffd700'
      />
    </div>
  );
};

Ratings.propTypes = {
  ratings: propTypes.number,
};

export default Ratings;
