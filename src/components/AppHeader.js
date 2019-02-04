import React from "react";
import { Header, HeaderNavigation } from "rivet-react";
import { IconHelp } from "../icons";

export const AppHeader = () => (
  <Header title="UITS | Status.IU" className="rvt-header--light rvt-text-bold">
    <HeaderNavigation>
      <a href="https://kb.iu.edu/d/abxl" className="rvt-button">
        {IconHelp} <span className="rvt-m-left-xs">Get help</span>
      </a>
    </HeaderNavigation>
  </Header>
);
