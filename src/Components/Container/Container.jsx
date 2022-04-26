import PropTypes from 'prop-types';

import styles from './Container.module.scss';

const Container = ({ children, className }) => (
  <div className={[styles.container, className].join(' ')}>{children}</div>
);

Container.defaultProps = {
  className: null,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
