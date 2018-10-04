import React, { Component } from 'react';
import 'rivet-uits/css/rivet.css'
import { Table } from 'rivet-react'
import { notices, serviceGroups, services } from '../status-api'
import './StatusMatrix.css'

const checkmark = <svg alt="Service is online and healthy." xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path fill="currentColor" d="M6.72,13l-.48-.36-3-3A1,1,0,0,1,4.71,8.29l2.11,2.12,4.33-6.94a1,1,0,0,1,1.7,1.06L7.64,12.87Z"/>
</svg>

const rss = <svg alt="RSS feed" xmlns="http://www.w3.org/2000/svg" viewBox="0 -256 1792 1792" width="16" height="16">
  <g transform="matrix(1,0,0,-1,212.61017,1346.1695)">
    <path
    d="M 384,192 Q 384,112 328,56 272,0 192,0 112,0 56,56 0,112 0,192 q 0,80 56,136 56,56 136,56 80,0 136,-56 56,-56 56,-136 z M 896,69 Q 898,41 879,21 861,0 832,0 H 697 Q 672,0 654,16.5 636,33 634,58 612,287 449.5,449.5 287,612 58,634 33,636 16.5,654 0,672 0,697 v 135 q 0,29 21,47 17,17 43,17 h 5 Q 229,883 375,815.5 521,748 634,634 748,521 815.5,375 883,229 896,69 z m 512,-2 Q 1410,40 1390,20 1372,0 1344,0 H 1201 Q 1175,0 1156.5,17.5 1138,35 1137,60 1125,275 1036,468.5 947,662 804.5,804.5 662,947 468.5,1036 275,1125 60,1138 35,1139 17.5,1157.5 0,1176 0,1201 v 143 q 0,28 20,46 18,18 44,18 h 3 Q 329,1395 568.5,1288 808,1181 994,994 1181,808 1288,568.5 1395,329 1408,67 z"
    id="path2993"
    fill="currentColor" />
  </g>
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


