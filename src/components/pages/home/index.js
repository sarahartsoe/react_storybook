import React from 'react';
import './style.css';
import { NbosDashboard } from '../NbosDashboard';
import { Provider } from 'react-redux';
import { store } from '../../store';

export function HomePage() {
  return (
    <Provider store={store}>
      <div className="App">
        <NbosDashboard />
      </div>
    </Provider>
  );
}
