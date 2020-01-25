import React, { Component } from "react";
import "@material/theme/dist/mdc.theme.css";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/button/dist/mdc.button.css";
import "./index.css";
import { TextField } from "@rmwc/textfield";
import { ThemeProvider } from "@rmwc/theme";
import { Button } from "@rmwc/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const getUserIcon = () => {
  return <FontAwesomeIcon className="user-icon" icon={faUser} />;
};

export default class UserLogin extends Component {
  render() {
    return (
      <div className="login-panel">
        {getUserIcon()}

        <ThemeProvider
          className="theme-provider"
          options={{
            primary: "#1249be",
            secondary: "#1249be"
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
          />
          <TextField
            className="input input-user-postal"
            outlined
            label="Postal Code"
            pattern="([A-Za-z][0-9]){3}"
          />

          <Button label="Login" raised />
        </ThemeProvider>
      </div>
    );
  }
}
