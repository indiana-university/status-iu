import React, { Component } from 'react';
import 'rivet-uits/css/rivet.css'
import { Table } from 'rivet-react'
import { maintenanceWindows } from '../status-api'

export class Maintenance extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      maintenanceWindows: []
    };
  }

  componentDidMount() {
    maintenanceWindows(this)
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="rvt-ts-41 rvt-text-bold">Regularly scheduled maintenance windows</h1>
        <Table margin={{top:'lg'}} variant="stripes" compact>
          <thead>
          <tr>
            <th>Service</th>
            <th>Frequency</th>
            <th>Day</th>
            <th>Time</th>
          </tr>
          </thead>
          <tbody>
          {this.state.maintenanceWindows.map((maintenance) =>
            <tr key={maintenance.id}>
              <td>{maintenance.service.name}</td>
              <td>{maintenance.frequency}</td>
              <td>{maintenance.day}</td>
              <td>{maintenance.time}</td>
            </tr>
          )}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}


