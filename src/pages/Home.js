import React, { Component } from 'react';
import 'rivet-uits/css/rivet.css'
import { notices, serviceGroups } from '../status-api'
import { Container } from 'rivet-react'
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
    serviceGroups(this)
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

    return (
      <Container margin={{tb: "md"}} width="senior" center>
        <Notices notices={alertNotices} title="Alert notices" />
        <Notices notices={maintenanceNotices} title="Maintenance notices" />
        <Notices notices={informationNotices} title="Information notices" />
        <StatusMatrix />
      </Container>
    );
  }
}


