import React from "react";
import _ from "lodash";
import { Drawer, DrawerHeader, DrawerTitle, DrawerContent } from "@rmwc/drawer";
import { List, SimpleListItem } from "@rmwc/list";

import diseases from "./diseases";

import "@material/drawer/dist/mdc.drawer.css";
import "@material/list/dist/mdc.list.css";

class Filter extends React.Component {
  _renderList = () => {
    let diseaseList = _.map(diseases, disease => (
      <SimpleListItem
        text={_.capitalize(disease)}
        activated={disease === this.props.filter}
        metaIcon={disease === this.props.filter && "check"}
        onClick={() => this.props.setFilter(disease)}
      />
    ));

    return diseaseList;
  };

  render() {
    return (
      <Drawer
        modal
        open={this.props.drawerOpen}
        onClose={this.props.onCloseDrawer}
      >
        <DrawerHeader>
          <DrawerTitle>Immunity Filter</DrawerTitle>
        </DrawerHeader>
        <DrawerContent>
          <List>{this._renderList()}</List>
        </DrawerContent>
      </Drawer>
    );
  }
}

export { Filter, Filter as default };
