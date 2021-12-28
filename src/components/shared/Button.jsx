import { isDisabled } from '@testing-library/user-event/dist/utils';
import PropTypes from 'prop-types';

function Button({ children, type, isDisabled, version }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: 'primary',
  type: 'submit',
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  version: PropTypes.string,
};

export default Button;
