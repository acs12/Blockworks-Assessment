import React, { Component } from 'react';
import '../../App.css';
import ProfileHeader from './ProfileHeader';
import ProfileBody from './ProfileBody';

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 'aayush@mail.com',
      firstName: 'Aayush',
      email: 'aayush@mail.com',
      phoneNumber: '6692392239',
    };
  }
  render() {
    let redirectVar = null;
    return (
      <div class="dashboard-body">
        {redirectVar}
        <ProfileHeader props={this.state} />
        <ProfileBody props={this.state} />
      </div>
    );
  }
}
