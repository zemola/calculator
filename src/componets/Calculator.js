import React from 'react';
import './calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Mainbody extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="result">0</div>
        <table className="calculatorkeys">
          <tr>
            <td>AC</td>
            <td>+/-</td>
            <td>%</td>
            <td>/</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>x</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>-</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>+</td>
          </tr>
          <tr>
            <td colSpan={2}>0</td>
            <td>.</td>
            <td>=</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Mainbody;
