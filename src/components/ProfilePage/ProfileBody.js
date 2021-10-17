import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Redirect } from 'react-router';
import avatar from '../../assets/images/avatar-orange.png';

export default class ProfileBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showName: true,
      showEmail: true,
      showNumber: true,
      firstName: 'Aayush',
      email: 'aayush@mail.com',
      phoneNumber: '6692392239',
      red: '',
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleLogout = () => {
    this.setState({
      red: <Redirect to="/login"></Redirect>,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    let red = this.state.red;
    return (
      <div id="fat_rabbit">
        {red}
        <div className="wrapper">
          <div class="toppad">&nbsp;</div>
          <div class="container">
            <div class="row mt-3 mb-2">
              <div class="span8 col-sm">
                <h1>Your account</h1>
              </div>
            </div>

            <form class="form-stacked" id="edit_user_27355282" onSubmit={this.handleSubmit}>
              <div className="container">
                <div className="row">
                  <div class="span3">
                    {this.props.props.avatar ? (
                      <img
                        class="picture-frame"
                        src={'http://localhost:3001/uploads/' + this.props.props.avatar}
                        alt="frame"
                      />
                    ) : (
                      <img class="picture-frame" src={avatar} alt="demo"></img>
                    )}
                    <div>
                      <div className="change-avatar">Change your avatar</div>
                      <input
                        id="user_avatar"
                        name="profilePicUrl"
                        size="10"
                        type="file"
                      />
                    </div>
                  </div>

                  <div class="span3 wide-fields">
                    <div class="clearfix">
                      <label for="user_name">Your name</label>
                      {this.state.showName ? (
                        <div class="input static name">
                          <strong>{this.props.props.firstName}</strong>
                          &nbsp;
                          <a
                            href="#"
                            onClick={() => {
                              this.setState({ showName: !this.state.showName });
                            }}
                          >
                            Edit
                          </a>
                        </div>
                      ) : (
                        <div class="input dynamic name">
                          <input
                            autocomplete="off"
                            type="text"
                            placeholder={this.props.props.firstName}
                            name="firstName"
                            id="firstName"
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                      )}
                    </div>

                    <div class="clearfix">
                      <label for="user_email">Your email address</label>
                      {this.state.showEmail ? (
                        <div class="input static email">
                          <strong>{this.props.props.email}</strong>
                          &nbsp;
                          <a
                            href="#"
                            onClick={() => {
                              this.setState({ showEmail: !this.state.showEmail });
                            }}
                          >
                            <i class="icon-pencil"></i> Edit
                          </a>
                        </div>
                      ) : (
                        <div class="input dynamic name">
                          <input
                            autocomplete="off"
                            type="email"
                            placeholder={this.props.props.email}
                            name="email"
                            id="email"
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                      )}
                    </div>

                    <div class="clearfix">
                      <label for="user_phone">Your phone number</label>
                      {this.state.showNumber ? (
                        <div class="input static phone">
                          <strong>{this.props.props.phoneNumber}</strong>
                          &nbsp;
                          <a
                            href="##"
                            onClick={() => {
                              this.setState({ showNumber: !this.state.showNumber });
                            }}
                          >
                            <i class="icon-pencil"></i> Edit
                          </a>
                        </div>
                      ) : (
                        <div class="input dynamic name">
                          <input
                            autocomplete="off"
                            type="phoneNumber"
                            placeholder={this.props.props.phoneNumber}
                            name="phoneNumber"
                            id="phoneNumber"
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div class="span3 col-sm">
                    <div class="clearfix">
                      <label for="user_default_currency">Your default currency</label>
                      <div className="new-exp-text">(for new expenses)</div>
                      <div class="input">
                        <select
                          class="modernized"
                          name="user[default_currency]"
                          id="user_default_currency"
                        >
                          <option value="INR">INR (₹)</option>
                          <option selected="selected" value="USD">
                            USD ($)
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class="clearfix">
                      <label for="user_time_zone">Your time zone</label>
                      <div class="input">
                        <select class="modernized" name="user[time_zone]" id="user_time_zone">
                          <option selected="selected" value="Chennai">
                            (GMT+05:30) Chennai
                          </option>
                          <option selected="selected" value="Pacific Time (US &amp; Canada)">
                            (GMT-08:00) Pacific Time (US &amp; Canada)
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class="clearfix">
                      <label for="user_locale">Language</label>
                      <div class="input">
                        <select class="modernized" name="user[locale]" id="user_locale">
                          <option selected="selected" value="en">
                            English
                          </option>
                          <option value="de">Deutsch</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="offset9 span3 columns text-center">
                  &nbsp;
                  <input
                    type="submit"
                    name="commit"
                    value="Save"
                    class="btn btn-large btn-orange"
                    data-disable-with="Save"
                  />
                </div>
              </div>
            </form>
            <Link to="/login" onClick={this.handleLogout}>
              <input
                type="submit"
                name="submit"
                value="Log out"
                class="btn btn-orange btn-large primary submit-button"
              />
            </Link>
          </div>
          <div class="bottompad">&nbsp;</div>
        </div>
      </div>
    );
  }
}
