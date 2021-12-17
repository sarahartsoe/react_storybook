import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NbosDashboard } from './components/pages/NbosDashboard';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NbosDashboard />} />
    </Routes>
  </BrowserRouter>
);

export default App;
