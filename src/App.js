import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NbosDashboard } from './components/pages/NbosDashboard';
import { store } from './store';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NbosDashboard />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
