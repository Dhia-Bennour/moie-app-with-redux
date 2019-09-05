import React, { Component } from 'react';
import './App.css';
import ConnectedMovieContainer from './components/movieContainer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedMovieContainer />
      </div>
    );
  }
}

export default App;
