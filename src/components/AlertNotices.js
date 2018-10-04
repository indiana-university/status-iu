import React, { Component } from 'react';
import 'rivet-uits/css/rivet.css'
import { notices } from '../status-api'
import {Link} from "react-router-dom";

export class AlertNotices extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      notices: [],
      serviceGroups: []
    };
  }

  componentDidMount() {
    notices(this)
  }

  render() {
    return (
      <React.Fragment>
        <h2>Alerts</h2>
        {this.state.notices.map((notice) =>
          notice.noticeType === 'Alert' && <li key={notice.id}>
            <Link to={`/notices/${notice.id}`}>{notice.name}</Link>
          </li>
        )}
      </React.Fragment>
    );
  }
}


