const React = require('react');
const { useState, useEffect } = React;

require('mapbox-gl/dist/mapbox-gl.css');

const Map = () => {

  useEffect(() => console.log('use effect'));

  return (
    <h1>Map goes here...</h1>
  )

};

module.exports = {
  Map
};
