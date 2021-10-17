import React, { Component } from 'react';
import logo from '../../assets/images/Slpitwise_logo.svg';
import '../../App.css';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import avatar from '../../assets/images/avatar-orange.png';

export default class homeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Aayush',
    };
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout = () => {
    this.setState({
      red: <Redirect to="/login"></Redirect>,
    });
  };
  render() {
    let red = this.state.red;
    return (
      <div>
        {red}
        <div className="header_common navbar position-fixed p-0">
          <div class="d-flex container flex_container">
            <Link to="/">
              <img id="common-logo" src={logo} alt="logo" />
            </Link>
            <ul class="nav pull-right">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="dropdown">
                  <Link to="/profile" class="dropdown-toggle1">
                    <img className="avatar-img" src={avatar} alt="avatar" />
                    {this.state.firstName}
                  </Link>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={this.handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
