import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const NATURAL_EVENT_VOLCANO = 12;
const GEOMETRIES_TYPE = "Point";

const Map = ({eventData, center, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id === NATURAL_EVENT_VOLCANO && ev.geometries[0].type === GEOMETRIES_TYPE ) {
            return <LocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} 
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title, latitude: ev.geometries[0].coordinates[1], longitude: ev.geometries[0].coordinates[0] })} />
        }
        return null
    })
    
    return (

        <div className="map">
            <GoogleMapReact 
                bootstrapURLKeys={{key: process.env.MAPS_API_KEY}}
                defaultCenter={center}
                defaultZoom={zoom}>
                
                {markers}

            </GoogleMapReact>

                {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: -7.7394,
        lng: 112.5099
    },
    zoom: 8
}

export default Map
