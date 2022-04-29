import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Route, Switch  } from "react-router-dom";

import HelloWorld from './HelloWorld';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" render={() => ("Home!")}/>
        <Route path="/hello" render={() => <HelloWorld greeting="Friend" />}/>
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App
