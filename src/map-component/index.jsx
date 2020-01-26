import React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoibG9hIiwiYSI6ImNrNXUybW56NTE0emgzbW5zcmRldWM4YWoifQ.VOAMrWPyGzx1tpIeBbA8Zg'
})

class MapComponent extends React.Component {
    render() {
        return <Map
            style="mapbox://styles/mapbox/light-v10"
            center={[-79.9209395, 43.2587083]}
            containerStyle={{
            height: '100vh',
            width: '100vw'
            }}
        >
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[43.2587083, -79.9209395]} />
            </Layer>
        </Map>
    }
}

export { MapComponent, MapComponent as default } 
