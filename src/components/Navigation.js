import React from "react";
import { List } from "rivet-react";
import { Dropdown } from './index';
import { IconCalendar, IconMaintenance } from '../icons';

export const Navigation = () => (
  <div className="siu-wrapper siu-wrapper--crimson">
    <div className="rvt-container rvt-container--junior rvt-container--center">
      <nav className="siu-main-nav" aria-label="Site navigation">
        <List className="siu-main-nav__list">
          <li className="siu-main-nav__item">
            <a className="rvt-display-flex rvt-vertical-center" href="./maintenance">{ IconMaintenance }<span className="rvt-m-left-xs">Maintenance</span></a>
          </li>
          <li className="siu-main-nav__item">
            <a className="rvt-display-flex rvt-vertical-center" href="./calendar">{IconCalendar}<span className="rvt-m-left-xs">Calendar</span></a>
          </li>
          <li className="rvt-display-flex rvt-vertical-center" style={{ height: '24px' }}><Dropdown menu="Information" alerts="Turnitin Similarity Report score discrepancy in Canvas" icon={ true } /></li>
        </List>
      </nav>
    </div>
  </div>
);
