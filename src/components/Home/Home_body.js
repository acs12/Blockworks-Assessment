import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LeftSidebar from './Left_sidebar.js';
import CenterColumn from './Center_column.js';
import '../../App.css';

export default class HomeBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 3000,
      totalMembers: 2,
      owned: '2000',
      youOwe: '2500',
      totalAmount: '-500',
      otherUsers: [
        { firstname: 'Member2', amount: 1500 },
        { firstname: 'Member1', amount: 6000 },
      ],
      red: '',
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout = () => {
    this.setState({
      red: <Redirect to="/login" />,
    });
  };

  render() {
    let red = this.state.red;
    return (
      <div id="center_container">
        {red}
        <div id="center_bars">
          <LeftSidebar props={this.props.props} />
          <CenterColumn props={this.state} />
        </div>
      </div>
    );
  }
}
