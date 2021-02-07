import React from 'react';
import propTypes from 'prop-types';

import { numberFormat } from '../../utils';

import css from './pricing.module.css';

const Pricing = ({ amount, amountPerPerson }) => {
  if (!amount) {
    return null;
  }

  return (
    <div className={css.pricing}>
      <div className={css.pricing__info}>
        <span>Total price from</span>
        <span className={css.pricing__amount}>{numberFormat(amount)}</span>
        <span>
          (Per Person <strong>{numberFormat(amountPerPerson)}</strong>)
        </span>
      </div>
      <a className={css.pricing__link} href='#'>
        View More
      </a>
    </div>
  );
};

Pricing.propTypes = {
  amount: propTypes.number,
  amountPerPerson: propTypes.number,
};

export default Pricing;
