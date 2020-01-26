import React from 'react'
import _ from 'lodash'
import { Drawer, DrawerHeader, DrawerTitle, DrawerContent } from '@rmwc/drawer'
import { List, SimpleListItem } from '@rmwc/list'

import diseases from './diseases'

import '@material/drawer/dist/mdc.drawer.css'
import '@material/list/dist/mdc.list.css'


class Filter extends React.Component {
    _renderList = () => {
        let diseaseList = _.map(diseases, (name, key) => 
                <SimpleListItem
                    text={name}
                    activated={key === this.props.filter}
                    metaIcon={key === this.props.filter && 'check'}
                    onClick={() => this.props.setFilter(key)}
                    style={key === this.props.filter && {color: "#4285F4" }}
                />
        )

        return diseaseList
    }

    render() {
        return (
            <Drawer modal open={this.props.drawerOpen} onClose={this.props.onCloseDrawer}>
                <DrawerHeader>
                    <DrawerTitle>Immunity Filter</DrawerTitle>
                </DrawerHeader>
                <DrawerContent>
                    <List>
                        {this._renderList()}
                    </List>
                </DrawerContent>
            </Drawer>
        )
    }
}

export { Filter, Filter as default }
