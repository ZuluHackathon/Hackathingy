import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import React from 'react';
import axios from 'axios';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/menu' element={<Menu />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    </BrowserRouter>
  )
};
