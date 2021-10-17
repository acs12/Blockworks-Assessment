import React, { Component } from 'react';
import '../../App.css';

export default class CenterColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="center_column">
        <div class="dashboard header">
          <div class="topbar">
            <h1>Dashboard</h1>
          </div>
        </div>

        <div class="clearfix">
          <div id="dashboard_balances">
            <div class="total_balances">
              <div class="block">
                <div class="title">total balance</div>
                {this.props.props.totalAmount >= 0 ? (
                  <span class="positive"> ${this.props.props.totalAmount}*</span>
                ) : (
                  <span class="negative"> ${this.props.props.totalAmount}*</span>
                )}
              </div>
              <div class="block">
                <div class="title">you owe</div>
                <span class="negative">${this.props.props.youOwe}*</span>
              </div>
              <div class="block">
                <div class="title">you are owed</div>
                <span class="positive">${this.props.props.owned}*</span>
              </div>
            </div>

            <h2 className="position-relative">
              you owe
              <span class="right">you are owed</span>
              <div className="list-view-button">
                <div class="btn-group toggle-chart-list">
                  <button class="btn active view_as_list">view as list</button>
                </div>
              </div>
            </h2>

            <div class="summary">
              <div id="people_summary">
                <div class="list">
                  {this.props.props.otherUsers.length > 0 ? (
                    this.props.props.otherUsers.map((value) =>
                      value.amount === this.props.props.amount ? (
                        ''
                      ) : value.amount > this.props.props.amount ? (
                        <div class="negatives">
                          <ul>
                            <li class="relationship">
                              <a>
                                <img
                                  src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-blue38-100px.png"
                                  alt="Avatar"
                                />
                                <div class="name">{value.firstname}</div>
                                <div class="balance i_owe">
                                  you owe{' '}
                                  <span class="amount">
                                    USD
                                    {Math.round(
                                      (value.amount / (this.props.props.totalMembers + 1) -
                                        this.props.props.amount /
                                          (this.props.props.totalMembers + 1)) *
                                        100
                                    ) / 100}
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      ) : (
                        <div class="positives">
                          <ul>
                            <li class="relationship">
                              <a>
                                <img
                                  src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-blue37-100px.png"
                                  alt="Avatar"
                                />
                                <span class="name">{value.firstname}</span>
                                <br />
                                <span class="balance owes_me">
                                  owes you{' '}
                                  <span class="amount">
                                    USD
                                    {Math.round(
                                      (this.props.props.amount /
                                        (this.props.props.totalMembers + 1) -
                                        value.amount / (this.props.props.totalMembers + 1)) *
                                        100
                                    ) / 100}
                                  </span>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      )
                    )
                  ) : (
                    <a></a>
                  )}

                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="recent_activity"></div>
        </div>
      </div>
    );
  }
}
