import React, { Component } from 'react';
import '../../App.css';
import HomeHeader from './Home_header';
import HomeBody from './Home_body';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 'aayush@mail.com',
      firstName: 'aayush',
      email: 'aayush@mail.com',
    };
  }

  render() {
    let redirectVar = null;
    return (
      <div class="dashboard-body">
        {redirectVar}
        <HomeHeader props={this.state} />
        <HomeBody props={this.state} />
      </div>
    );
  }
}
