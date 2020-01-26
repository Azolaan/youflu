import React from 'react'
import _ from 'lodash'
import ReactMapboxGl, { Layer, Feature, Source } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoibG9hIiwiYSI6ImNrNXUybW56NTE0emgzbW5zcmRldWM4YWoifQ.VOAMrWPyGzx1tpIeBbA8Zg',
    maxZoom: 13
})

class MapComponent extends React.Component {
    state = {
        data: {}
    }

    componentDidMount() {
        this._getData()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filter !== this.props.filter) {
            this._getData()
        }
    }

    _getData = async () => {
        const response = await fetch('http://localhost:8080/map', { headers: {'Content-Type': 'application/json'} })
        this.setState({ data: this._filterData(await response.json()) })
    }

    _filterData = (data) => {
        let rawData = _.filter(data, ({ properties }) => 
            _.includes(_.get(properties, 'diseases'), this.props.filter)
        )

        return {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: rawData
            }
        }
    }

    _heatmapPaintProps = {
        'heatmap-weight': {
            property: 'dbh',
            type: 'exponential',
            stops: [
                [1, 0],
                [62, 1]
      ]
        },
        'heatmap-intensity': {
            stops: [
                [11, 0.5],
                [15, 1]
              ]
        },
        'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0, 'rgba(236,222,239,0)',
            0.2, 'rgb(208,209,230)',
            0.4, 'rgb(166,189,219)',
            0.6, 'rgb(103,169,207)',
            0.8, 'rgb(28,144,153)'
        ],
        'heatmap-radius': {
            stops: [
                [10, 20],
                [15, 60]
              ]
        },
        'heatmap-opacity': {
            default: 0.85,
            stops: [
                [11, 0.85],
                [15, 0.8]
            ]
        }
    }

    render() {
        return <Map
            style="mapbox://styles/mapbox/light-v10"
            center={this.props.center}
            containerStyle={{
            height: '100vh',
            width: '100vw'
            }}
        >
            <Source id="immunity-data" geoJsonSource={this.state.data}/>
            <Layer 
                id="immunity-heatmap"
                type="heatmap"
                sourceId="immunity-data"
                paint={this._heatmapPaintProps} />
        </Map>
    }
}

export { MapComponent, MapComponent as default } 
