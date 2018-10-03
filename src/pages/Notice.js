import React, { Component } from 'react';
import 'rivet-uits/css/rivet.css'
import { Badge, Row, Col, Panel } from 'rivet-react'

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
            <h1>{notice.name}</h1>
            <div>Services affected: {notice.services && notice.services.map(service =>
              <Badge variant="info" key={service.id}>{service.name}</Badge>
            )}</div>
            <p>{notice.content}</p>
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


