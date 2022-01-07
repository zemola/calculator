// import { checkPropTypes } from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';

const Btn = ({ className, value, onEvent }) => (
  <button type="button" className={className} onClick={() => onEvent(value)}>
    {value}
  </button>
);
Btn.propTypes = {
  value: PropTypes.string.isRequired,
  onEvent: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Btn;
