import React, { Component } from 'react';

import './App.css';
import  GrapesjsEditor from "./component/Library/Grapesjs.js";

class App extends Component {
  constructor( props ) {
    super( props );
  }
  render() {
    return (
      <div className="App">
        <GrapesjsEditor/>
      </div>
    );
  }
}

export default App;
