import React, { Component } from "react";
import "@material/theme/dist/mdc.theme.css";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/button/dist/mdc.button.css";
import "./index.css";
import { TextField } from "@rmwc/textfield";
import { ThemeProvider } from "@rmwc/theme";
import { Button } from "@rmwc/button";
import { Icon } from '@rmwc/icon'
import logo from '../logo/sheep.svg'

const getUserIcon = () => {
  return <Icon className="user-panel-icon" icon={{ icon: logo, style: { fontSize: '150px', marginTop: '100px' } }}/>
};

export default class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      userName: null,
      password: null,
      postalCode: null
    };
  }

  _updateUserName = event => {
    this.setState({
      userName: event.target.value
    });
  };

  _updatePassWord = event => {
    this.setState({
      password: event.target.value
    });
  };

  _updatePostalCode = event => {
    this.setState({
      postalCode: event.target.value
    });
  };

  _handleSubmit = () => {
    const { userName, password, postalCode } = this.state;

    this._postData({
      userid: userName,
      password: password,
      postalCode: postalCode
    });
  };

  _postData = async (
    url = "http://localhost:8080/auth/register",
    data = {}
  ) => {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  };

  render() {
    return (
      <div className="user-panel create-panel">
        {getUserIcon()}
        <div className="user-panel-slogan">Join the Herd!</div>
        <form>
          <ThemeProvider
            className="theme-provider"
            options={{
              primary: "#4285F4",
              secondary: "#4285F4"
            }}
          >
            <TextField
              className="input input-user-name"
              outlined
              label="User Name"
              pattern="^[A-Za-z0-9]+$"
              onChange={this._updateUserName}
              autoFocus
            />
            <TextField
              className="input input-user-password"
              outlined
              label="Password"
              type="password"
              onChange={this._updatePassWord}
            />
            <TextField
              className="input input-user-postal"
              outlined
              label="Postal Code"
              pattern="([A-Za-z][0-9]){3}"
              onChange={this._updatePostalCode}
            />

            <Button
              className="create-panel-create-button"
              type="submit"
              label="Create Account"
              onClick={this.props.onUserRegister}
              raised />
          </ThemeProvider>
        </form>
      </div>
    );
  }
}
