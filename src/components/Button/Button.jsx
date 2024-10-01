import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children }) => {
  return <button>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
