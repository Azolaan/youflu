import React from "react";
import { ThemeProvider } from "@rmwc/theme";
import MapComponent from "./map-component";
import Filter from "./filter";
import AppBar from "./top-app-bar";

import "@material/icon-button/dist/mdc.icon-button.css";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";

class App extends React.Component {
  state = {
    page: "map",
    drawerOpen: false,
    filter: "flu",
    center: [-79.9209395, 43.2587083]
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

  _handleSetLatLng = latlng => {
    this.setState({ center: [latlng.lng, latlng.lat] });
  };

  render() {
    return (
      <ThemeProvider options={{ primary: "hsl(206, 99%, 31%)" }}>
        <div className="App">
          <AppBar
            onOpenDrawer={this._handleOpenDrawer}
            setLatLng={this._handleSetLatLng}
          />
          <Filter
            drawerOpen={this.state.drawerOpen}
            onCloseDrawer={this._handleCloseDrawer}
            filter={this.state.filter}
            setFilter={this._handleSetFilter}
          />
          <MapComponent center={this.state.center} filter={this.state.filter} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
