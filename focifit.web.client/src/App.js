import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header';
import Content from './containers/Content';
class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />
         <Content />
      </div>
    );
  }
}

export default App;
