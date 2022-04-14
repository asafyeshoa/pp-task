import React, {useRef, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl'
import geoJson from '../chicago-parks.json'
import "../Style/Mapbox.css"
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'

const token = 'pk.eyJ1IjoiYXNhZjEyMzEyMzEyMyIsImEiOiJjbDF4dW5mYWQwNmFkM2ltazV1M3MxbXE5In0.XKgb4qy2QiQ2hk1S8kSqBQ'


mapboxgl.accessToken = token;


const Mapbox = (props) => {

    const {lat, setLat, lng, setLng} = props
    const mapContainerRef = useRef(null);
    const [zoom, setZoom] = useState(7);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom,
        });

        geoJson.features.map((feature) =>
            new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(map)
        );

        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        map.on('move', () => {
            setLng(map.getCenter().lng.toFixed(4));
            setLat(map.getCenter().lat.toFixed(4));
            setZoom(map.getZoom().toFixed(2));
        });

        map.on('click', (e) => {
            setLat(e.lngLat.lat)
            setLng(e.lngLat.lng)
        })

        return () => map.remove();
    }, [lat, lng]);

    return (
        <div>
            <div className="sidebarStyle">
                <div>
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
            </div>
            <div className="map-container" ref={mapContainerRef}/>
        </div>
    );
};

export default Mapbox;
