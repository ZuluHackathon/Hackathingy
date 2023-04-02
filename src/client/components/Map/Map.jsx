import { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { fridgeData } from './locations.js';

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

const Map = () => {
  const [mapObj, setMapObj] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
      container: 'map',
      style: process.env.MAPBOX_STYLE,
      center: [-90.0715, 29.9511],
      zoom: 12,
    });
    map.on('load', () => {
      console.log('Map load event triggered!');
      // Add your code for adding fridgeData to the map here
      map.addSource('fridges', {
        type: 'geojson',
        data: fridgeData,
      });

      map.addLayer({
        id: 'fridges-layer',
        type: 'symbol',
        source: 'fridges',
        layout: {
          'icon-image': 'grocery-15',
          'icon-size': 1.5,
          'icon-allow-overlap': true,
        },
      });
    });
  }, []);
  

  return (
    <>
      <h1>Map goes here...</h1>
      <div id='map' style={{height: '400px'}}></div>
    </>
  )
};

export default Map;
