import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import { TridentHeader } from '../icons';

export const AppHeader = () => (
  <header className="rvt-header rvt-header--light" role="banner">
    <a className="rvt-skip-link" href="#main-content">Skip to content</a>
    <div className="rvt-header__trident">{ TridentHeader }</div>
    <span className="rvt-header__title">
      <BrowserRouter>
        <Link to="/">UITS | <span className="rvt-text-bold">Status.IU</span></Link>
      </BrowserRouter>
    </span>
</header>
);
