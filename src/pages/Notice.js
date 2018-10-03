import React, { Component } from 'react';
import 'rivet-uits/css/rivet.css'

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
        <h1>Notice</h1>
      </React.Fragment>
    );
  }
}


