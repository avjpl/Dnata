import React from 'react';
import propTypes from 'prop-types';

import Listing from '../listing';

import css from './listings.module.css';

const Listings = ({ listings }) => {
  return (
    <div className={css.listings}>
      {listings.map((listing, idx) => (
        <Listing key={idx} {...listing}>
          <Listing.Content>
            <Listing.Heading />
            <Listing.Ratings />
            <Listing.Description />
            <Listing.Reviews />
            <Listing.Divider />
            <Listing.Includes />
            <Listing.Pricing />
          </Listing.Content>
        </Listing>
      ))}
    </div>
  );
};

Listings.propTypes = {
  listings: propTypes.array.isRequired,
};

export default Listings;
