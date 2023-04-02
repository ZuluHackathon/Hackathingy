/* eslint-disable no-unused-vars */
import mapboxgl from "mapbox-gl";
import { useState, useEffect } from "react";
import axios from 'axios';
import "mapbox-gl/dist/mapbox-gl.css";
import { fridgeData } from "./locations.js";
import { App } from '../App.jsx'

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

  const [to, setTo] = useState('');

  const handleSignUp = () => {
    const to = document.getElementById("to").value; // Get the value of the input field
    console.log(to);
    axios
      .post("/send-sms", {
        to: to,
      })
      .then((response) => {
        console.log(response.data);
        alert("Si");
      })
      .catch((err) => {
        console.error(err);
        alert("Oops! Something went wrong.");
      });
  };
  

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
      <label>
        Phone number:
        <input id="to" type="text" value={to} onChange={(event) => setTo(event.target.value)} />
      </label>
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
    </>
  );
};

export default Map;
