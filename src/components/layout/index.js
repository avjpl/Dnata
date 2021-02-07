import PropTypes from 'prop-types';

import css from './layout.module.css';

const Layout = ({ children }) => {
  return <div className={css.layout}>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
