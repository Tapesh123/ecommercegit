import React, { Component } from "react";
import { connect } from "react-redux";
import "./Login.css";
import { login, logInServer } from "../action/Login";

// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import { FacebookLoginButton } from "react-social-login-buttons";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      userType: "",
      isLoggedIn: false
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleClick = () => {
    this.props.logInClick(this.state);
    console.log(this.state);
  };

  render() {
    return (
      <div className="jumbotron">
        <div className="row">
          <div className="col-md-2">User name</div>
          <div className="col-md-6">
            <input
              type="text"
              onChange={this.handleChange}
              name="userName"
            ></input>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2">Password</div>
          <div className="col-md-6">
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
            ></input>
          </div>
          <button
            className="btn btn-success"
            onClick={this.handleClick}
            type="button"
          >
            Login
          </button>
          <br />
          {this.props.login && (
            <label> {"Welcome " + this.props.login.userType}</label>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logInClick: userDetails => dispatch(logInServer(userDetails))
  };
};

const mapStateToProps = ({ login }) => {
  return {
    login
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
