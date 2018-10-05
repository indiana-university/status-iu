import React, { Component } from 'react';
import 'rivet-uits/css/rivet.css'
import { Table, Container } from 'rivet-react'
import { Link } from 'react-router-dom'
import {groups, services, notices} from '../status-api'
import './StatusMatrix.css'
import {checkmark, chevronDown, chevronRight, rss} from '../icons'


export class StatusMatrix extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      notices: [],
      groups: [],
      services: []
    };
    this.isPartOfGroup = this.isPartOfGroup.bind(this)
    this.toggleGroup = this.toggleGroup.bind(this)
    this.expandGroupsWithNotices = this.expandGroupsWithNotices.bind(this)
    this.getServiceIds = this.getServiceIds.bind(this)
    this.groupHasNotices = this.groupHasNotices.bind(this)
    this.serviceHasNotice = this.serviceHasNotice.bind(this)
  }

  isPartOfGroup(service, group) {
    if(service && group) {
        return service.serviceGroup.id === group.id
    }
    return false
  }

  getServiceIds(group) {
    let serviceIds = []
    let services = this.state.services


    // find the services that are a part of this group
    for(let i=0; i < services.length; i++) {
      if(this.isPartOfGroup(services[i], group)) {
        serviceIds.push(services[i].id)
      }
    }

    return serviceIds.join(',')
  }

  toggleGroup(id) {
    let groups = this.state.groups
    let group = groups.findIndex((group) => {
      return group.id === id
    })

    groups[group].expanded = !groups[group].expanded
    this.setState({groups});
  }

  serviceHasNotice(service) {
    let notices = this.state.notices

    return notices.filter((notice) => {
      return notice.services.filter((s) => {
        return s.id === service.id
      }).length > 0
    }).length > 0

  }

  groupHasNotices(group) {
    for(let i=0; i < this.state.services.length; i++) {
      if(this.isPartOfGroup(this.state.services[i], group) && this.serviceHasNotice(this.state.services[i])) {
        return true
      }
    }
    return false
  }

  expandGroupsWithNotices() {
    // make sure all the APIs have finished before expanding
    if(this.state.groups.length === 0 || this.state.services.length === 0 || this.state.notices.length === 0) {
      setTimeout(function() { this.expandGroupsWithNotices() }.bind(this), 100)
    }

    let groups = this.state.groups

    for(let i=0; i < groups.length; i++) {
      if(this.groupHasNotices(groups[i])) {
        groups[i].expanded = true
      }
    }

    this.setState({groups});

  }

  componentDidMount() {
    groups(this)
    services(this)
    notices(this)
  }

  render() {
    return (
      <Container className="status-matrix" hide='md-down'>
        <div className="status-key">
          <ul className="status-key__list">
            <li className="status-key__item status-key__item--alert">
              <i className="fa fa-exclamation-triangle"></i>
              <span>Alert</span>
            </li>
            <li className="status-key__item status-key__item--ongoing">
              <i className="fa fa-minus-square"></i>
              <span>Ongoing issue</span>
            </li>
            <li className="status-key__item status-key__item--maintenance">
              <i className="fa fa-cogs"></i>
              <span>Maintenance</span>
            </li>
            <li className="status-key__item status-key__item--good">
              <span className="rvt-color-green">{checkmark}</span>
              <span>Healthy</span>
            </li>
          </ul>
        </div>
        <Table margin={{top: "md"}} compact>
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
            {this.state.groups.map((group) =>
              <React.Fragment key={group.id}>
                <tr className="status-matrix__header-row">
                  <td className="status-matrix__category">
                    <button onClick={()=>this.toggleGroup(group.id)} className="rvt-button--plain status-matrix__category-toggle js-toggle__trigger">
                      {group.expanded ? chevronDown : chevronRight}
                      <span className="rvt-m-left-xs">{group.name}</span>
                    </button>
                    <Link to={`/Rss?services=${this.getServiceIds(group)}`}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="status-matrix__category-rss">
                      {rss}
                      <span className="rvt-sr-only">RSS feed for {group.name}</span>
                    </Link>
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
                {group.expanded && this.state.services.map((service) =>
                  <React.Fragment key={service.id}>
                    { this.isPartOfGroup(service, group) &&
                      <tr className="status-matrix__sub-row js-toggle__target">
                        <td className="status-matrix__service">
                          <Link className="rvt-ts-xs rvt-m-left-lg status-matrix__service-title" to={`/service/${service.id}`}>{service.name}</Link>
                          <Link to={`/Rss?services=${service.id}`} target="_blank" rel="noopener noreferrer" className="status-matrix__service-rss">
                            {rss}
                          </Link>
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
      </Container>
    );
  }
}


