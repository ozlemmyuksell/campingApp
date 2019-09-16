import React, { Component, useState } from "react";
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap
} from "react-google-maps";
import staticData from "../staticData";

function Map() {
  return (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={{ lat: 38.963745, lng: 35.243320 }}
    >
      {staticData.features.map((camps)=> (
        <Marker
          position={{ lat: camps.coordinates[0], lng: camps.coordinates[1]}}
        />
      ))}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default class MapContainer extends Component {
  render() {
    return (
      <div style={{ width: "100vw", height: "100vw" }}>
        <WrappedMap
          googleMapURL={
            "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places}"
          }
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
