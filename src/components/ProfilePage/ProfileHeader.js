import React from 'react';
import logo from '../../assets/images/Slpitwise_logo.svg';
import '../../App.css';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProfileHeader(props) {
  return (
    <div className="header_common navbar position-fixed p-0">
      <div class="d-flex container flex_container">
        <a href="/">
          <img id="common-logo" src={logo} alt="logo" />
        </a>
        <ul class="nav pull-right">
          <li>
            <Link className="profile-home" to="/home">
              Home
            </Link>
          </li>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="dropdown">
              <Link to="/profile" class="dropdown-toggle1">
                {props.props.avatar ? (
                  <img
                    className="avatar-img"
                    src={'http://localhost:3001/uploads/' + props.props.avatar}
                    alt="avatar"
                  />
                ) : (
                  <img src></img>
                )}
                {props.props.firstName}
              </Link>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ul>
      </div>
    </div>
  );
}

export default ProfileHeader;
