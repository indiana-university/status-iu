import React, { Component } from "react";
import { AppHeader, Navigation } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Navigation />
      </div>
    );
  }
}

export default App;
