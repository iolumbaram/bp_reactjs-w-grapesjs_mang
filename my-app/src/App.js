import React, { Component } from 'react';

import classes from './App.css';
import  GrapesjsEditor from "./component/Library/Grapesjs.js";

class App extends Component {
  constructor( props ) {
    super( props );
  }
  render() {
    return (
      <div className={classes.App}>
        <GrapesjsEditor/>
      </div>
    );
  }
}

export default App;
