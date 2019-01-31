import React from "react";
import {CaratDown} from "../icons"

export const Dropdown = ({menu, alerts}) => (
  <div className="rvt-dropdown">
    <button className="rvt-button rvt-button--plain rvt-p-all-remove siu-info-toggle" data-dropdown-toggle="dropdown-navigation" aria-haspopup="true" aria-expanded="false">
        <span className="rvt-m-left-xs">{menu}</span>
        <CaratDown className="rvt-m-left-xs" />
    </button>
    <div className="rvt-box rvt-box--card rvt-dropdown__menu rvt-dropdown__menu--right rvt-dropdown__menu--large" id="dropdown-navigation" aria-hidden="true" role="menu">
        <a key="1" href="./fake">{alerts}</a>
    </div>
  </div>
);
