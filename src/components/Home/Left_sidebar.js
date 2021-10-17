import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

export default class LeftSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList: ['Home', 'Friends', 'Trip'],
    };
  }

  render() {
    console.log('1234', this.props.props);
    return (
      <div id="left_sidebar">
        <div id="view_links">
          <Link to="/home" id="dashboard_link" className="open">
            <span></span> Dashboard
          </Link>
          <Link id="notifications_link" class="unread">
            Recent activity
          </Link>

          <div class="expense_filter_links">
            <div class="tags">
              <div class="header">
                Groups
                <Link>Add</Link>
              </div>
              {this.state.groupList.map((group) => {
                return <a>{group}</a>;
              })}
            </div>

            <div class="tags">
              <div class="header">Group Invites</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
