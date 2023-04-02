import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App.jsx';
import Map from './components/Map/Map.jsx';

const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<Map />);
