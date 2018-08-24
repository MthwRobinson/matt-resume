import React, { Component } from 'react';
import './App.css';
import Resume from 'react-awesome-resume';
import 'semantic-ui-css/semantic.min.css';

import { person } from './person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Resume jsonResume={person} theme='default' />
      </div>
    );
  }
}

export default App;
