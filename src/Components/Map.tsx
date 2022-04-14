import { useState, useRef } from "react";
import geoJson from "../chicago-parks.json";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapView = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYXNhZjEyMzEyMzEyMyIsImEiOiJjbDF4dW5mYWQwNmFkM2ltazV1M3MxbXE5In0.XKgb4qy2QiQ2hk1S8kSqBQ",
});

export default function Map(props: {
  lng: number;
  lat: number;
  setLat: Function;
  setLng: Function;
}) {
  const [zoom, setZoom] = useState(15);
  const { lng, lat, setLat, setLng } = props;
  const _ = (x: number) => parseFloat(x.toFixed(4));
  const metersToPixelsAtMaxZoom = (meters: number, latitude: number): number =>
    meters / 0.075 / Math.cos((latitude * Math.PI) / 180);
  function onMapClick(map: any, eventData: any) {
    const { lng, lat } = eventData.lngLat;
    setLat(_(lat));
    setLng(_(lng));
  }
  function onZoom(map: any) {
    setZoom(_(map.getZoom()));
  }
  const _circleRaduis = metersToPixelsAtMaxZoom(100, lat);
  return (
    <>
      <div>
        <div className='sidebarStyle'>
          <div style={{margin: "8px"}}>
            Longitude: {lng} | Latitude: {lat}
          </div>
        </div>
      </div>
      <MapView
        style='mapbox://styles/mapbox/streets-v9'
        center={[lng, lat]}
        onMoveEnd={(...args) => console.log("MoveEnd", args)}
        onClick={onMapClick}
        onZoomEnd={onZoom}
        zoom={[zoom]}
        containerStyle={{
          height: "100%",
          width: "100%",
        }}>
        {
          <Layer
            type='symbol'
            id='marker'
            layout={{ "icon-image": "marker-15" }}>
            <Feature coordinates={[lng, lat]} />
          </Layer>
        }
        <Layer
          id='clusters'
          type='circle'
          paint={{
            "circle-radius": {
              stops: [
                [0, 0],
                [20, _circleRaduis],
              ],
              base: 2,
            },
            "circle-color": "#0000FF",
            "circle-opacity": 0.4,
          }}
          coordinates={[lng, lat]}>
          <Feature coordinates={[lng, lat]} />
        </Layer>
      </MapView>
    </>
  );
}
