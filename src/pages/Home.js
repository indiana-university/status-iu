import React, { Component } from 'react';
import 'rivet-uits/css/rivet.css'
import { notices, serviceGroups } from '../status-api'
import { AlertNotices, InformationNotices, MaintenanceNotices, StatusMatrix } from "../components";

export class Home extends Component {

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
    serviceGroups(this)
  }

  render() {
    return (
        <React.Fragment>
          <AlertNotices />

          <MaintenanceNotices />

          <InformationNotices />

          <StatusMatrix />

        </React.Fragment>
    );
  }
}


