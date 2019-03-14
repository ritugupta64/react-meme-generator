import React, { Component } from 'react';

import Header from "./components/header";
import Memegenerator from "./components/memegenerator";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Memegenerator />
      </div>
    );
  }
}

export default App;
