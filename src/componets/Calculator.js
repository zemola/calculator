import React from 'react';
import Btn from './button';
import './calculator.css';
import calculate from '../logic/calculate';

class Mainbody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const handleClick = (buttonName) => {
      const name = buttonName.target.innerText;
      const { total, next, operation } = calculate(this.state, name);
      this.setState({ total, next, operation });
    };
    const { total, next, operation } = this.state;
    const display = () => {
      if (next) {
        return next;
      }
      if (operation) {
        return operation;
      }
      if (total) {
        return total;
      }
      return 0;
    };
    return (
      <div className="wrapper">
        <input className="input-field" placeholder="0" type="text" maxLength="0" value={display()} onChange={() => ''} />
        <div className="btn-wrapper">
          <Btn value="AC" className="btn" click={handleClick} />
          <Btn value="+/-" className="btn" click={handleClick} />
          <Btn value="%" className="btn" click={handleClick} />
          <Btn value="÷" className="btn light" click={handleClick} />
        </div>
        <div className="btn-wrapper">
          <Btn value="7" className="btn" click={handleClick} />
          <Btn value="8" className="btn" click={handleClick} />
          <Btn value="9" className="btn" click={handleClick} />
          <Btn value="x" className="btn light" click={handleClick} />
        </div>
        <div className="btn-wrapper">
          <Btn value="4" className="btn" click={handleClick} />
          <Btn value="5" className="btn" click={handleClick} />
          <Btn value="6" className="btn" click={handleClick} />
          <Btn value="-" className="btn light" click={handleClick} />
        </div>
        <div className="btn-wrapper">
          <Btn value="1" className="btn" click={handleClick} />
          <Btn value="2" className="btn" click={handleClick} />
          <Btn value="3" className="btn" click={handleClick} />
          <Btn value="+" className="btn light" click={handleClick} />
        </div>
        <div className="btn-wrapper">
          <Btn value="0" className="btn last" click={handleClick} />
          <Btn value="." className="btn dot" click={handleClick} />
          <Btn value="=" className="btn light-end" click={handleClick} />
        </div>
      </div>
    );
  }
}

export default Mainbody;
