import React, { Component } from 'react';
import 'rivet-uits/css/rivet.css'
import { notices } from '../status-api'
import {Container} from 'rivet-react'
import { Notices, StatusMatrix } from "../components";

export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      notices: [],
      serviceGroups: []
    };

    this.filterNoticesByType = this.filterNoticesByType.bind(this)

  }

  componentDidMount() {
    notices(this)
  }

  filterNoticesByType(type) {
    let notices = this.state.notices
    return notices.filter((notice) => {
      return notice.noticeType === type
    })
  }

  render() {
    let filterNoticesByType = this.filterNoticesByType
    let alertNotices = filterNoticesByType('Alert')
    let maintenanceNotices = filterNoticesByType('Maintenance')
    let informationNotices = filterNoticesByType('Information')
    let ongoingNotices = filterNoticesByType('Ongoing')

    return (
      <Container margin={{tb: "md"}} width="senior" center>
        <Notices type='alert' notices={alertNotices} title="Alert notices" />
        <Notices type='maintenance' notices={maintenanceNotices} title="Maintenance notices" />
        <Notices type='information' notices={informationNotices} title="Information notices" />
        <Notices type='ongoing' notices={ongoingNotices} title="On-going notices" />
        <StatusMatrix hide="md-down" />
      </Container>
    );
  }
}


