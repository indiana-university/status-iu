import React, { Component } from 'react';
import 'rivet-uits/css/rivet.css'
import './Notices.css'
import {Link} from "react-router-dom";


export class Notices extends Component {
  render() {
    let props = this.props;
    let title = props.title;
    let notices = props.notices;
    let type = props.type;

    return (
      <React.Fragment>
        {!!notices.length &&
          <div class={`message-box message-box--${type}`}>
            <header class="message-box-header">
              <h2 class="message-box-header__message">{title}</h2>
              <div class="message-box-header__count">{notices.length}</div>
            </header>
            <ul class="message-box__list">
              {notices && notices.map((notice) =>
                <li class="message-box__list-item" key={notice.id}>
                  <div class="container kill-vertical">
                    <div class="unit four-fifths">
                      <Link to={`/notices/${notice.id}`}>{notice.name}</Link>
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


