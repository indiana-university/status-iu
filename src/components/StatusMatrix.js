import React, { Component } from 'react';
import 'rivet-uits/css/rivet.css'
import { Table } from 'rivet-react'
import { notices, serviceGroups, services } from '../status-api'
import './StatusMatrix.css'

const checkmark = <svg alt="Service is online and healthy." xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path fill="currentColor" d="M6.72,13l-.48-.36-3-3A1,1,0,0,1,4.71,8.29l2.11,2.12,4.33-6.94a1,1,0,0,1,1.7,1.06L7.64,12.87Z"/>
</svg>

const rss = <svg alt="RSS feed" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path fill="currentColor" d="M14.57,12.06,13,9.7V6A5,5,0,0,0,3,6V9.7L1.43,12.06a1.25,1.25,0,0,0,1,1.94H6a2,2,0,0,0,4,0h3.53a1.25,1.25,0,0,0,1-1.94ZM8,12H3.87L5,10.3V6a3,3,0,0,1,6,0v4.3L12.13,12Z"/>
</svg>

const chevronUp = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path fill="currentColor" d="M14,12a1,1,0,0,1-.76-.35L8,5.54,2.76,11.65a1,1,0,1,1-1.52-1.3L6.48,4.23a2.06,2.06,0,0,1,3,0l5.24,6.11A1,1,0,0,1,14,12Z"/>
</svg>

const chevronDown = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path fill="currentColor" d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"/>
</svg>



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
  }

  componentDidMount() {
    notices(this)
    serviceGroups(this)
    services(this)
  }

  render() {
    return (
      <Table>
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
          {this.state.serviceGroups.map((category) =>
            <React.Fragment key={category.id}>
              <tr className="status-matrix__header-row">
                <td className="status-matrix__category">
                  <button className="rvt-button--plain status-matrix__category-toggle js-toggle__trigger">
                    {chevronUp}
                    <span className="rvt-m-left-xs">{category.name}</span>
                  </button>
                  <a href="https://status.uits.iu.edu/Rss?services=TODO,TODO"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="status-matrix__category-rss">
                    {rss}
                    <span className="rvt-sr-only">RSS feed for {category.name}</span>
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
              <tr className="status-matrix__sub-row js-toggle__target">
                <td className="status-matrix__service">
                  <a className="status-matrix__service-title" href="https://status.uits.iu.edu/service/TODO">Service under {category.name}</a>
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
            </React.Fragment>
          )}
        </tbody>
      </Table>
    );
  }
}


