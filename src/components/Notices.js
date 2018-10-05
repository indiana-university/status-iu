import React, { Component } from 'react';
import 'rivet-uits/css/rivet.css'
import './Notices.css'
import { Link } from 'react-router-dom';
import { Badge } from 'rivet-react'


export class Notices extends Component {
  render() {
    let props = this.props;
    let title = props.title;
    let notices = props.notices;
    let type = props.type;

    return (
      <React.Fragment>
        {!!notices.length &&
          <div className={`message-box message-box--${type}`}>
            <header className="message-box-header">
              <h2 className="message-box-header__message">{title}</h2>
              <div className="message-box-header__count">{notices.length}</div>
            </header>
            <ul className="message-box__list">
              {notices && notices.map((notice) =>
                <li className="message-box__list-item" key={notice.id}>
                  <div className="container kill-vertical">
                    <div className="unit four-fifths">
                      <Link to={`/notices/${notice.id}`}>{notice.name}</Link>
                      {notice.services.length > 1 &&
                        <div>
                          <span className="rvt-ts-xs rvt-text-bold rvt-m-right-xs">Affected services:</span>
                          {notice.services.map((service) =>
                            <Badge key={service.id} modifier="secondary" typescale="xxs" margin={{right:'xxs', top:'xs'}}>{service.name}</Badge>
                          )}
                        </div>
                      }
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        }
      </React.Fragment>
    );
  }
}


