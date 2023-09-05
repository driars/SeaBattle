import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';
import { SeaBattle } from './pages/SeaBattle';

export const App = () => {
  return (
    <Provider store={store}>
      <div className="body-container">
        <h2>Sea Battle</h2>
        <SeaBattle />
      </div>
    </Provider>
  );
};
