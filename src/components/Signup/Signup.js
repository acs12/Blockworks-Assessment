import React, { Component } from 'react';
import logo from '../../assets/images/login-body-logo.svg';
import { Redirect } from 'react-router';
import '../../App.css';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.firstNameChangeHandler = this.firstNameChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.emailChangeHandler = this.emailChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  firstNameChangeHandler = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  emailChangeHandler = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  passwordChangeHandler = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      red: <Redirect to="/home"></Redirect>,
    });
  };

  render() {
    let redirectVar = this.state.red;

    return (
      <div class="d-flex container flex_container login-body">
        {redirectVar}
        <img width="200" height="200" class="login_logo" src={logo} alt="xyz" />
        <div class="login-sidebar">
          {this.state.error}

          <div class="sidebar-header">Introduce yourself</div>
          <form class="form-stacked" id="new_user_session" onSubmit={this.handleSubmit}>
            <div class="clearfix">
              <label for="user_session_email" class="mb-1 label-style-signup-font">
                Hi there! My name is
              </label>
              <div class="input">
                <input
                  tabindex="1"
                  class="inputBox_signup form-control"
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={this.firstNameChangeHandler}
                  required
                />
              </div>
            </div>

            <div class="secondary_fields">
              <div class="mb-1 label-style-signup">
                Here’s my <strong>email address</strong>:
                <br />
                <input
                  tabindex="2"
                  type="email"
                  class="inputBox_signup form-control"
                  name="email"
                  id="email"
                  onChange={this.emailChangeHandler}
                  required
                ></input>
              </div>

              <div class="mb-1 label-style-signup">
                And here’s my <strong>password</strong>:
                <br />
                <input
                  tabindex="3"
                  type="password"
                  name="password"
                  class="inputBox_signup form-control"
                  id="password"
                  onChange={this.passwordChangeHandler}
                  required
                />
              </div>
            </div>

            <input
              type="submit"
              name="commit"
              value="Sign me up!"
              class="btn btn-large btn-orange btn-signup mt-2"
            />
          </form>
        </div>
      </div>
    );
  }
}
