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

export default class LoginUser extends Component {
  render() {
    return (
      <div className="user-panel login-panel">
        {getUserIcon()}
        <div className="user-panel-slogan">Join the Herd!</div>
        <form method="get">
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
              autoFocus
            />
            <TextField
              className="input input-user-password"
              outlined
              label="Password"
              type="password"
            />
            <Button
              className="account-button account-login"
              type="submit"
              label="Login"
              onClick={this.props.onUserLogin}
              raised
            />
            <div>
              Want to participate?
              <Button
                onClick={this.props.onUserSignUp}
                label="Sign Up"
              >
              </Button>
            </div>
          </ThemeProvider>
        </form>
      </div>
    );
  }
}
