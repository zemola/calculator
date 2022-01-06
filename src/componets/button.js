// import { checkPropTypes } from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';

class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, className, click } = this.props;
    return (
      <button type="button" className={className} onClick={click}>
        {value}
      </button>
    );
  }
}
Btn.propTypes = {
  value: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Btn;
