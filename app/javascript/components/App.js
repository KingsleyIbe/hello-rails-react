import React from "react"
// import PropTypes from "prop-types"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HelloWorld from './HelloWorld';
import Home from './Home';
import Greeting from './Greeting';

class App extends React.Component {
  render () {
    return (
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/hello" element={<HelloWorld />} />
              <Route path="/greetings" element={<Greeting />} />
            </Routes>
          </BrowserRouter>
    );
  }
}

export default App
