import React from "react";
// import logo from './logo.svg';
// import './App.css'
import { ThemeProvider } from "@rmwc/theme";
import MapComponent from "./map-component";
import Filter from "./filter";
import AppBar from "./top-app-bar";
import LoginUser from "./user-component/login-user";
import CreateUser from "./user-component/create-user";

import "@material/icon-button/dist/mdc.icon-button.css";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";

class App extends React.Component {
  state = {
    page: "map",
    drawerOpen: false,
    filter: null
  };

  _handleOpenDrawer = () => {
    this.setState({ drawerOpen: true });
  };

  _handleCloseDrawer = () => {
    this.setState({ drawerOpen: false });
  };

  _handleSetFilter = filter => {
    this.setState({ filter });
  };

  render() {
    return <LoginUser></LoginUser>;
  }
}

export default App;
