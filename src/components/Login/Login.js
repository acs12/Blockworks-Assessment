import '../../App.css';
import LoginHeader from './Login-_header.js';
import LoginBody from './Main_body.js';
import { Component } from 'react';

class Login extends Component {
  render() {
    let redirectVar = null;
    return (
      <div>
        {redirectVar}
        <LoginHeader />
        <LoginBody />
      </div>
    );
  }
}

export default Login;
