import React from 'react'
import _ from 'lodash'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete'
  import { TextField } from '@rmwc/textfield'
  import { List, SimpleListItem } from '@rmwc/list'

class AutocompleteSearchInput extends React.Component {
    state = {
        address: ''
    }

    _handleChange = (address) => {
        this.setState({ address })
    }

    _handleSelect = (address) => {
        geocodeByAddress(address)
        .then((results) => getLatLng(_.head(results)))
        .then((latlng) => this.props.setLatLng(latlng))
        .catch((error) => console.log(error))
    }

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this._handleChange}
                onSelect={this._handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className="app-bar-search">
                        <TextField {...getInputProps({
                            className: "app-bar-search-field",
                            placeholder: "Search...",
                            icon: "search"
                        })} />
                        <List className="autocomplete-suggestions">
                            {loading && <div>Loading...</div>}
                            {_.map(suggestions, (suggestion) => {
                                return (
                                    <SimpleListItem
                                        {...getSuggestionItemProps(suggestion, {
                                            activated: suggestion.active,
                                            text: suggestion.description
                                        })}
                                    />
                                )
                            })}
                        </List>
                    </div>
                )}
            </PlacesAutocomplete>
        )
    }
}

export { AutocompleteSearchInput, AutocompleteSearchInput as default }