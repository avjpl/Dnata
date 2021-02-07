import React, { Children, cloneElement } from 'react';
import Image from 'next/image';
import propTypes from 'prop-types';

import Heading from './heading';
import Ratings from './ratings';
import Description from './description';
import Reviews from './reviews';
import Includes from './includes';
import Pricing from './pricing';
import Divider from './divider';
import Content from './content';

import css from './listing.module.css';

const Listing = ({ children, image, ...rest }) => {
  return (
    <div className={css.listing}>
      <Image
        src={image}
        layout='intrinsic'
        width={400}
        height={250}
        alt={`Picture of ${rest.name} hotel`}
      />
      {Children.map(children, (child) => cloneElement(child, { ...rest }))}
    </div>
  );
};

Listing.propTypes = {
  image: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};

Listing.Content = Content;
Listing.Heading = Heading;
Listing.Ratings = Ratings;
Listing.Description = Description;
Listing.Reviews = Reviews;
Listing.Includes = Includes;
Listing.Pricing = Pricing;
Listing.Divider = Divider;

export default Listing;
