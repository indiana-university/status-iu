import React, { Component } from 'react';
import 'rivet-uits/css/rivet.css'
import { Table } from 'rivet-react'

export class Maintenance extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      notices: []
    };
  }

  componentDidMount() {
    fetch("https://api.status-test.uits.iu.edu/Notices")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            notices: result
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
    return (
      <React.Fragment>
        <Table variant="stripes" cells>
          <thead>
          <tr>
            <th>Greeting</th>
            <th>Audience</th>
          </tr>
          </thead>
          <tbody>
          {this.state.notices.map((notice) =>
            <tr key={notice.id}>
              <td>{notice.name}</td>
              <td>{notice.content}</td>
            </tr>
          )}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}


