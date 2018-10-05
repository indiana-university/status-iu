import React, { Component } from 'react';
import 'rivet-uits/css/rivet.css'
import {Link} from "react-router-dom";

export class Notices extends Component {
  render() {
    let props = this.props;
    let title = props.title;
    let notices = props.notices;

    return (
      <React.Fragment>
        <h2>{title}</h2>
        {notices && notices.map((notice) =>
          <li key={notice.id}>
            <Link to={`/notices/${notice.id}`}>{notice.name}</Link>
          </li>
        )}
      </React.Fragment>
    );
  }
}


