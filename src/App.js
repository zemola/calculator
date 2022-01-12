import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import Mainbody from './componets/Calculator';
import Home from './componets/Home';
import Quote from './componets/quote';

const App = () => (
  <BrowserRouter>
    <div className="wrapper-er">
      <nav className="nav">
        <h1 className="heading">Math Magicians</h1>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/quotes">Quote</Link>

        </ul>
      </nav>
    </div>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/calculator" element={<Mainbody />} />
      <Route path="/quotes" element={<Quote />} />

    </Routes>
  </BrowserRouter>
);

export default App;
