import React from 'react';
import './App.css';
import Mainbody from './componets/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <Mainbody />
      </div>
    );
  }
}
export default App;
