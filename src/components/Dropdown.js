import React from "react";
import { CaratDown, IconInformation } from "../icons"

export const Dropdown = ({menu, alerts, icon}) => (
  <div className="rvt-dropdown">
    { icon === true ? (
      <button className="rvt-button rvt-button--plain siu-info-toggle" data-dropdown-toggle="dropdown-navigation" aria-haspopup="true" aria-expanded="false">
        { IconInformation }<span className="rvt-m-left-xs">{menu}</span>
      </button>
    ) : (
      <button className="rvt-button rvt-button--plain siu-info-toggle" data-dropdown-toggle="dropdown-navigation" aria-haspopup="true" aria-expanded="false">
        <span className="rvt-m-left-xs">{menu}</span>
        <CaratDown className="rvt-m-left-xs" />
      </button>
    )}
    <div className="rvt-box rvt-box--card rvt-dropdown__menu rvt-dropdown__menu--right rvt-dropdown__menu--large" id="dropdown-navigation" aria-hidden="true" role="menu">
        <a key="1" href="./fake">{alerts}</a>
    </div>
  </div>
);
