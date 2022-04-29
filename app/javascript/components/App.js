import React from "react"
// import PropTypes from "prop-types"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HelloWorld from './HelloWorld';
import Home from './Home';

class App extends React.Component {
  render () {
    return (
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/hello" element={<HelloWorld />} />
            </Routes>
          </BrowserRouter>
    );
  }
}

export default App
