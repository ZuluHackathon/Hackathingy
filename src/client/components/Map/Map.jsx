/* eslint-disable no-unused-vars */
import mapboxgl from "mapbox-gl";
import { useState, useEffect } from "react";

import "mapbox-gl/dist/mapbox-gl.css";
import { fridgeData } from "./locations.js";

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

const Map = () => {
  const [mapObj, setMapObj] = useState(null);

  const handleFollow = () => {
    console.log("Selected Fridges Followed");
  };

  const handleSignup = () => {
    console.log("User Email and Password Saved");
  };

  const handleTwilio = () => {
    console.log("Twilio API Text");
  };

  useEffect(() => {
    mapboxgl.accessToken = process.env.MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
      container: "map",
      style: process.env.MAPBOX_STYLE,
      center: [-90.0715, 29.9511],
      zoom: 12,
    });
    map.on("load", () => {
      console.log("Map load event triggered!");
      // Add your code for adding fridgeData to the map here
      map.addSource("fridges", {
        type: "geojson",
        data: fridgeData,
      });

      map.addLayer({
        id: "fridges-layer",
        type: "symbol",
        source: "fridges",
        layout: {
          "icon-image": "grocery",
          "icon-size": 1.5,
          "icon-allow-overlap": true,
        },
      });
      setMapObj(map);
    });
  }, []);

  return (
    <>
      <h1>Fridge-Follower</h1>
      <div id="map" style={{ height: "400px" }}></div>
      <button onClick={handleFollow} style={{ margin: "10px" }}>
        Follow
      </button>
      <button onClick={handleFollow} style={{ margin: "10px" }}>
        Twilio
      </button>
      <div id="signup">
        <input type="text" placeholder="Email"></input>
        <input type="text" placeholder="Password"></input>
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </>
  );
};

export default Map;
