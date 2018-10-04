import React, { Component } from 'react';
import 'rivet-uits/css/rivet.css'
import { Table } from 'rivet-react'
import { notices, serviceGroups, services } from '../status-api'
import './StatusMatrix.css'
import {checkmark, chevronUp, rss} from '../icons'


export class StatusMatrix extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      notices: [],
      serviceGroups: [],
      services: []
    };
    this.isPartOfGroup = this.isPartOfGroup.bind(this)
  }

  isPartOfGroup(service, group) {
    return service.serviceGroup.id === group.id
  }

  componentDidMount() {
    notices(this)
    serviceGroups(this)
    services(this)
  }

  render() {
    return (
      <Table compact>
        <thead>
          <tr>
            <th width="350">Service category</th>
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
        </thead>
        <tbody>
          {this.state.serviceGroups.map((group) =>
            <React.Fragment key={group.id}>
              <tr className="status-matrix__header-row">
                <td className="status-matrix__category">
                  <button className="rvt-button--plain status-matrix__category-toggle js-toggle__trigger">
                    {chevronUp}
                    <span className="rvt-m-left-xs">{group.name}</span>
                  </button>
                  <a href="https://status.uits.iu.edu/Rss?services=TODO,TODO"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="status-matrix__category-rss">
                    {rss}
                    <span className="rvt-sr-only">RSS feed for {group.name}</span>
                  </a>
                </td>
                <td className="status-icon status-icon--good rvt-color-green">{checkmark}</td>
                <td className="status-icon status-icon--good rvt-color-green">{checkmark}</td>
                <td className="status-icon status-icon--good rvt-color-green">{checkmark}</td>
                <td className="status-icon status-icon--good rvt-color-green">{checkmark}</td>
                <td className="status-icon status-icon--good rvt-color-green">{checkmark}</td>
                <td className="status-icon status-icon--good rvt-color-green">{checkmark}</td>
                <td className="status-icon status-icon--good rvt-color-green">{checkmark}</td>
                <td className="status-icon status-icon--good rvt-color-green">{checkmark}</td>
                <td className="status-icon status-icon--good rvt-color-green">{checkmark}</td>
              </tr>
              {this.state.services.map((service) =>
                <React.Fragment key={service.id}>
                  { this.isPartOfGroup(service, group) &&
                    <tr className="status-matrix__sub-row js-toggle__target">
                      <td className="status-matrix__service">
                        <a className="status-matrix__service-title" href="https://status.uits.iu.edu/service/TODO">{service.name}</a>
                        <a href="https://status.uits.iu.edu/Rss?services=TODO" target="_blank" rel="noopener noreferrer" className="status-matrix__service-rss">
                          {rss}
                        </a>
                      </td>
                      <td className="status-icon status-icon--good rvt-color-green">{checkmark}</td>
                      <td className="status-icon status-icon--good rvt-color-green">{checkmark}</td>
                      <td className="status-icon status-icon--good rvt-color-green">{checkmark}</td>
                      <td className="status-icon status-icon--good rvt-color-green">{checkmark}</td>
                      <td className="status-icon status-icon--good rvt-color-green">{checkmark}</td>
                      <td className="status-icon status-icon--good rvt-color-green">{checkmark}</td>
                      <td className="status-icon status-icon--good rvt-color-green">{checkmark}</td>
                      <td className="status-icon status-icon--good rvt-color-green">{checkmark}</td>
                      <td className="status-icon status-icon--good rvt-color-green">{checkmark}</td>
                    </tr>
                  }
                </React.Fragment>
              )}
            </React.Fragment>
          )}
        </tbody>
      </Table>
    );
  }
}


