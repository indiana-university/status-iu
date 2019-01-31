import React, { Component } from "react";
import { AppHeader, Navigation } from './components';
import { Footer } from "rivet-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Navigation />
        <Footer>
          <a href="/privacy">Privacy Policy</a>
          <a href="https://accessibility.iu.edu/" target="_blank" rel="noopener noreferrer">Accessibility help</a>
        </Footer>
      </div>
    );
  }
}

export default App;
