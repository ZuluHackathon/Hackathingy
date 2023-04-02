const React = require('react');
const { useState, useEffect } = React;

require('mapbox-gl/dist/mapbox-gl.css');
require('dotenv/config');

// mapbox://styles/colinwilliams91/clfymyfoj000201t9g65vm3ij

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: process.env.MAPBOX_STYLE, // style URL
    center: [29.958501240683663, -90.101982042647], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

const Map = () => {

  useEffect(() => console.log('use effect'));

  return (
    <>
      <h1>Map goes here...</h1>
      <div id='map'></div>
    </>
  )

};

export default Map;
