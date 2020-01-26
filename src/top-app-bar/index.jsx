import React from "react";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarActionItem,
  TopAppBarTitle,
  TopAppBarNavigationIcon
} from "@rmwc/top-app-bar";
import { AutocompleteSearchInput } from "./autocomplete";
import UserPanel from "../user-panel-component/index";

import "./index.css";

import "@material/top-app-bar/dist/mdc.top-app-bar.css";

class AppBar extends React.Component {
  constructor() {
    super();
    this.state = {
      showUserPanel: false
    };
  }

  toggleUserPanel = () => {
    this.setState(prevState => {
      return {
        showUserPanel: !prevState.showUserPanel
      };
    });
  };

  render() {
    const { showUserPanel } = this.state;
    return (
      <React.Fragment>
        {showUserPanel ? (
          <UserPanel
            showUserPanel={showUserPanel}
            toggleUserPanel={this.toggleUserPanel}
          ></UserPanel>
        ) : (
          ""
        )}
        <TopAppBar className="app-bar" fixed>
          <TopAppBarRow>
            <TopAppBarSection alignStart>
              <TopAppBarNavigationIcon
                icon="menu"
                onClick={this.props.onOpenDrawer}
              />
              <TopAppBarTitle className="app-bar-title">YouFlu</TopAppBarTitle>
              <AutocompleteSearchInput setLatLng={this.props.setLatLng} />
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
              <TopAppBarActionItem
                icon="account_circle"
                onClick={this.toggleUserPanel}
              />
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
      </React.Fragment>
    );
  }
}

export { AppBar, AppBar as default };
