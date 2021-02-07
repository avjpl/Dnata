import React, { Children, cloneElement } from 'react';
import propTypes from 'prop-types';

import css from './content.module.css';

const Content = ({ children, ...rest }) => {
  return (
    <div className={css.content}>
      {Children.map(children, (child) => cloneElement(child, { ...rest }))}
    </div>
  );
};

Content.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};

export default Content;
