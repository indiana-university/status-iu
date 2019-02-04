import React, { Component } from 'react';
import { AppHeader, Navigation } from '../components/index';
import Home from '../components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import { Footer } from 'rivet-react';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Navigation />
        <BrowserRouter>
          <main id="main-content">
            <Route path="/" exact component={Home} />
          </main>
        </BrowserRouter>
        <Footer>
          <a href="/privacy">Privacy Policy</a>
          <a href="https://accessibility.iu.edu/" target="_blank" rel="noopener noreferrer">Accessibility help</a>
        </Footer>
      </div>
    );
  };
}

export default App;
