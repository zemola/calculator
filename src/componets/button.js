import React from "react";
import PropTypes from 'prop-types'
import { click } from "@testing-library/user-event/dist/click";

class Btn extends React.Component {
    constructor(props) {
        super(props);
        this.State = {};
    }
  render() {
      const {value, className,click} = this.props
      return(
        <button type="button" className= {className} onClick={click}>{value}</button>
      );
  }
}

btn.PropTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    click: PropTypes.function.isRequired,
}

export default Btn;