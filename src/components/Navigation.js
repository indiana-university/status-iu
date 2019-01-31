import React from "react";
import { List } from "rivet-react";
import { Dropdown } from "./Dropdown"

export const Navigation = () => (
  <div className="siu-wrapper">
    <nav className="siu-main-nav" aria-label="Site navigation">
      <List className="siu-main-nav__list">
        <li className="siu-main-nav__item">
          <a className="siu-plain-link" href="./maintenance">Maintenance</a>
        </li>
        <li className="siu-main-nav__item">
          <a className="siu-plain-link" href="./calendar">Calendar</a>
        </li>
        <li className="siu-main-nav__item"><Dropdown menu="Information" alerts="Turnitin Similarity Report score discrepancy in Canvas" /></li>
      </List>
    </nav>
  </div>
);
