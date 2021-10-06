import { Component } from 'react';
import './App.css';
import Accordion from './components/Accordion.js';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Accordion heading="Heading">
          Demo children lesson
        </Accordion>
      </div>
    );
  }
}

export default App;
