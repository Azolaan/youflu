import React, { Component } from "react";
import "@material/textfield/dist/mdc.textfield.css";
import "./index.css";
import { TextField } from "@rmwc/textfield";

var inputStyle = {
  margin: "10px",
  width: "500px"
};

export default class UserLogin extends Component {
  render() {
    return (
      <div className="login-panel">
        <TextField outlined label="User Name" style={inputStyle} />
        <TextField outlined label="Password" style={inputStyle} />
        <TextField outlined label="Postal Code" style={inputStyle} />
      </div>
    );
  }
}
