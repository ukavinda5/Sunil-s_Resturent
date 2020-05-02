import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <h1>LOGIN</h1>
        <div className="seperater">
          <div className="sep"></div>
          <i class="fas fa-utensils fa-3x"></i>
          <div className="sep"></div>
        </div>
        <div className="login_con">
          <i class="fas fa-users fa-3x"></i>
          <input className="txt" type="text" placeholder="User Name"></input>
          <input className="txt" type="password" placeholder="Password"></input>
          <button>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
