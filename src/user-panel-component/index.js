import React, { Component } from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogButton
} from "@rmwc/dialog";
import { Drawer, DrawerTitle, DrawerHeader, DrawerContent } from "@rmwc/drawer";
import { List, ListItem } from "@rmwc/list";
import { Button } from "@rmwc/button";
import { TextField } from "@rmwc/textfield";
import { Checkbox } from "@rmwc/checkbox";
import _ from "lodash";
import diseases from "../filter/diseases";

import "@material/dialog/dist/mdc.dialog.css";
import "@material/button/dist/mdc.button.css";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/checkbox/dist/mdc.checkbox.css";
import "@material/form-field/dist/mdc.form-field.css";

export default class UserPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openVaccDrawer: false
    };
  }

  getDiseaseCheckbox = () => {
    let diseaseCheckbox = _.map(diseases, disease => (
      <Checkbox
        label={_.capitalize(disease)}
        style={{ width: "100%" }}
      ></Checkbox>
    ));

    return diseaseCheckbox;
  };

  render() {
    const { showUserPanel, toggleUserPanel } = this.props;
    const { openVaccDrawer } = this.state;
    return (
      <form action="get">
        <Dialog open={showUserPanel} onClose={toggleUserPanel}>
          <DialogTitle>User Panel</DialogTitle>
          <DialogContent>You can Modify your information.</DialogContent>
          <TextField label="Postal Code" />

          <div
            className="disease-checkbox"
            style={{
              display: "flex",
              flexDirection: "column",
              overflowY: "scroll",
              margin: "10px",
              height: "300px"
            }}
          >
            <DialogTitle>Vaccinated For</DialogTitle>
            {this.getDiseaseCheckbox()}
          </div>

          <DialogActions>
            <DialogButton type="submit" action="save">
              Save
            </DialogButton>
            <DialogButton action="discard" isDefaultAction>
              Discard
            </DialogButton>
          </DialogActions>
        </Dialog>
      </form>
    );
  }
}
