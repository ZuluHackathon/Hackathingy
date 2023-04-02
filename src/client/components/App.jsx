/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Map from "./Map/Map.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/menu' element={<Menu />} /> */}
        <Route path="/locations" element={<Map />} />
        {/* <Route path='/about' element={<About />} /> */}
        {/* <Route path='/profile' element={<Profile />} /> */}
        <Route path="/" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
