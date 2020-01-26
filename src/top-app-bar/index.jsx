import React from 'react'
import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarActionItem, TopAppBarFixedAdjust, TopAppBarNavigationIcon } from '@rmwc/top-app-bar'
import { AutocompleteSearchInput } from './autocomplete'

import './index.css'

import '@material/top-app-bar/dist/mdc.top-app-bar.css'


class AppBar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TopAppBar className="app-bar" fixed>
                    <TopAppBarRow>
                        <TopAppBarSection alignStart>
                            <TopAppBarNavigationIcon icon="menu" onClick={this.props.onOpenDrawer} />
                            <AutocompleteSearchInput setLatLng={this.props.setLatLng}/>
                        </TopAppBarSection>
                        <TopAppBarSection alignEnd>
                            <TopAppBarActionItem icon="account_circle" />
                        </TopAppBarSection>
                    </TopAppBarRow>
                </TopAppBar>
            </React.Fragment>
        )
    }
}

export { AppBar, AppBar as default}