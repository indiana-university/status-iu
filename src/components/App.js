import React, { Component } from "react";
import { Header, HeaderNavigation } from "rivet-react";
import { IconHelp } from "../icons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Status.IU" className="rvt-text-bold rvt-header--light">
          <HeaderNavigation>
            <a href="https://kb.iu.edu/d/abxl" className="rvt-button">
              {IconHelp} <span className="rvt-m-left-xs">Get help</span>
            </a>
          </HeaderNavigation>
        </Header>
      </div>
    );
  }
}

export default App;
