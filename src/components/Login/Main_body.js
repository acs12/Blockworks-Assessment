import React, { Component } from 'react';
import logo from '../../assets/images/login-body-logo.svg';
import { Redirect } from 'react-router';
import '../../App.css';

export default class loginBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.emailChangeHandler = this.emailChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

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

    if (this.state.email !== null && this.state.password !== null) {
      this.setState({
        red: <Redirect to="/home"></Redirect>,
      });
    }
  };

  render() {
    let error = this.state.error;
    let redirectVar = this.state.red;

    return (
      <div class="d-flex container flex_container login-body">
        {redirectVar}
        <img width="200" height="200" class="login_logo" src={logo} alt="xyz" />
        <div class="login-sidebar">
          {error}
          <div class="sidebar-header mb-2">Welcome to Splitwise</div>
          <form class="form-stacked" id="new_user_session" onSubmit={this.handleSubmit}>
            <div class="clearfix">
              <label for="user_session_email" class="mb-1 label-style">
                Email address
              </label>
              <div class="input">
                <input
                  autocapitalize="off"
                  class="inputBox"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@mail.com"
                  onChange={this.emailChangeHandler}
                  required
                />
              </div>
            </div>
            <div class="clearfix">
              <label for="user_session_password" class="mb-1 label-style">
                Password
              </label>
              <div class="input">
                <input
                  class="inputBox"
                  type="password"
                  name="password"
                  placeholder="*****"
                  id="password"
                  onChange={this.passwordChangeHandler}
                  required
                />
              </div>
            </div>

            <input
              type="submit"
              name="commit"
              value="Log in"
              class="btn btn-orange btn-large primary submit-button"
              data-disable-with="Log in!"
            />
          </form>
        </div>
      </div>
    );
  }
}
