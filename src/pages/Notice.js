import React, { Component } from 'react';
import 'rivet-uits/css/rivet.css'
import { Badge, Row, Col, Panel } from 'rivet-react'
import { checkmark, exclamation, info, minus } from "../icons";

export class Notice extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      notice: {}
    };
  }

  componentDidMount() {
    let match = this.props.match
    let params = match.params
    let noticeId = params.noticeId

    fetch("https://api.status-test.uits.iu.edu/Notices/" + noticeId)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            notice: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    let notice = this.state.notice

    return (
      <React.Fragment>
        <Row>
          <Col md={8}>
            <h1 className="rvt-ts-41 rvt-text-bold">{notice.name}</h1>
            <div className="rvt-m-tb-md">Affected services: {notice.services && notice.services.map(service =>
              <Badge variant="info" key={service.id}>{service.name}</Badge>
            )}</div>
            <p dangerouslySetInnerHTML={{__html: notice.content}} />
            <h2 className="rvt-text-bold rvt-m-top-lg">Affected campuses</h2>
            <div className="rvt-m-tb-sm status-matrix status-matrix--single">
              <table>
                <thead>
                <tr>
                  <th className="status-matrix__campus">IUB</th>
                  <th className="status-matrix__campus">IUPUI</th>
                  <th className="status-matrix__campus">IUPUC</th>
                  <th className="status-matrix__campus">IUE</th>
                  <th className="status-matrix__campus">IUFW</th>
                  <th className="status-matrix__campus">IUK</th>
                  <th className="status-matrix__campus">IUN</th>
                  <th className="status-matrix__campus">IUSB</th>
                  <th className="status-matrix__campus">IUS</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="status-icon status-icon--good rvt-alert--success">{checkmark}</td>
                  <td className="status-icon status-icon--good rvt-alert--success">{checkmark}</td>
                  <td className="status-icon status-icon--good rvt-alert--info">{info}</td>
                  <td className="status-icon status-icon--good rvt-alert--success">{checkmark}</td>
                  <td className="status-icon status-icon--good rvt-alert--error">{exclamation}</td>
                  <td className="status-icon status-icon--good rvt-alert--warning">{minus}</td>
                  <td className="status-icon status-icon--good rvt-alert--success">{checkmark}</td>
                  <td className="status-icon status-icon--good rvt-alert--success">{checkmark}</td>
                  <td className="status-icon status-icon--good rvt-alert--success">{checkmark}</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div className="status-key status-key--left">
              <ul className="status-key__list">
                <li className="status-key__item status-key__item--alert">
                  <span className="rvt-alert--danger rvt-m-right-xxs">{exclamation}</span>
                  <span>Alert</span>
                </li>
                <li className="status-key__item status-key__item--ongoing">
                  <span className="rvt-alert--warning rvt-m-right-xxs">{minus}</span>
                  <span>Ongoing issue</span>
                </li>
                <li className="status-key__item status-key__item--maintenance">
                  <span className="rvt-alert--info rvt-m-right-xxs">{info}</span>
                  <span>Maintenance</span>
                </li>
                <li className="status-key__item status-key__item--good">
                  <span className="rvt-alert--success rvt-m-right-xxs">{checkmark}</span>
                  <span>Healthy</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <Panel>
              <h2>Details</h2>
              <ul className="rvt-plain-list">
                <li>
                  <h3>ID No.</h3>
                  <div>{notice.id}</div>
                </li>
                <li>
                  <h3>Last status check</h3>
                  <div>{notice.lastActivityOn}</div>
                </li>
                <li>
                  <h3>Start date</h3>
                  <div>{notice.changeStart || notice.publishedOn}</div>
                </li>
                <li>
                  <h3>End date</h3>
                  <div>{notice.changeEnd || "Not set."}</div>
                </li>
              </ul>
            </Panel>
          </Col>
        </Row>

      </React.Fragment>
    );
  }
}


