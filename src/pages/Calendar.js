import React, { Component } from 'react';
import 'rivet-uits/css/rivet.css'
import { Table, Container, Col, Row } from 'rivet-react'
import { Link } from "react-router-dom";
import { DebounceInput } from 'react-debounce-input';

export class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      notices: [],
      date: null
    };
    this.search = this.search.bind(this)
  }

  search(start, end) {
    if(!start) {
      return false
    }


    start = new Date(start)
    this.setState({date: start.toISOString().split('T')[0]})
    if(!end) {
      end = start
    }

    end = new Date(end)
    start = start.toISOString()
    end = end.toISOString()
    fetch('https://api.status-test.uits.iu.edu/notices/search?visibleStart='+start+'&visibleEnd=' + end)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            notices: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            notices: error
          });
      }
    )
  }

  componentDidMount() {
    this.search(new Date())
  }

  render() {
    let notices = this.state.notices
    let date = this.state.date
    return (
      <React.Fragment>
        <h1 className="rvt-ts-41 rvt-text-bold">Notices calendar</h1>

        <hr />

        <Container margin={{top: 'lg'}}>
          <Row>
            <Col md={4}>
              <DebounceInput value={date} type="date" onChange={event=>this.search(event.target.value)} />
            </Col>
            <Col md={8}>
              <Table variant="stripes" cells>
                <thead>
                <tr>
                  <th>Maintenance notices</th>
                </tr>
                </thead>
                <tbody>
                {notices && notices.map((notice) =>
                  <tr key={notice.id}>
                    <td>
                      <Link to={`/notices/${notice.id}`}>{notice.name}</Link>
                    </td>
                  </tr>
                )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}


