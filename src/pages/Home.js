import React, { Component } from 'react';
import 'rivet-uits/css/rivet.css'
import { Table } from 'rivet-react'
import { Link } from 'react-router-dom'
import { notices, serviceGroups } from '../status-api'

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

          <h2>Alerts</h2>
          {this.state.notices.map((notice) =>
            notice.noticeType === 'Alert' && <li>
              <Link to={`/notices/${notice.id}`}>{notice.name}</Link>
            </li>
          )}
          <h2>Maintenance notices</h2>
          {this.state.notices.map((notice) =>
            notice.noticeType === 'Maintenance' && <li>
              <Link to={`/notices/${notice.id}`}>{notice.name}</Link>
            </li>
          )}

          <h2>Information notices</h2>
          {this.state.notices.map((notice) =>
            notice.noticeType === 'Information' && <li>
              <Link to={`/notices/${notice.id}`}>{notice.name}</Link>
            </li>
          )}

          <Table variant="stripes" cells>
            <thead>
            <tr>
              <tr>
                <th width="350" className="u-text-left u-bold">Service category</th>
                <th className="status-matrix__campus">
                  <abbr title="Bloomington">IUB</abbr>
                </th>
                <th className="status-matrix__campus">
                  <abbr title="Indianapolis">IUPUI</abbr>
                </th>
                <th className="status-matrix__campus">
                  <abbr title="Columbus">IUPUC</abbr>
                </th>
                <th className="status-matrix__campus">
                  <abbr title="Richmond">IUE</abbr>
                </th>
                <th className="status-matrix__campus">
                  <abbr title="Fort Wayne">IUFW</abbr>
                </th>
                <th className="status-matrix__campus">
                  <abbr title="Kokomo">IUK</abbr>
                </th>
                <th className="status-matrix__campus">
                  <abbr title="Gary">IUN</abbr>
                </th>
                <th className="status-matrix__campus">
                  <abbr title="South Bend">IUSB</abbr>
                </th>
                <th className="status-matrix__campus">
                  <abbr title="New Albany">IUS</abbr>
                </th>
              </tr>
            </tr>
            </thead>
            <tbody>
            {this.state.serviceGroups.map((service) =>
              <tr key={service.id}>
                <td>{service.name}</td>
                <td>{service.description}</td>
              </tr>
            )}
            </tbody>
          </Table>
        </React.Fragment>
    );
  }
}


