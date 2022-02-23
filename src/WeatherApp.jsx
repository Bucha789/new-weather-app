import React, { useReducer } from 'react';
import { MainWeatherDisplay } from './components/information/MainWeatherDisplay';
import { AppContext } from './context/AppContext';
import { appReducer } from './reducers/appReducer';

import './assets/styles/index.css';

const defaultState = {
  place: {
    name: 'Nothing,'
  }, 
  weatherStats: {
    current: {
      temp: 0,
      humidity: 0,
      win_deg: 0,
      win_speed: 0,
      visibility: 0,
      pressure: 0,
      weather: [{
        main: 'No place Selected'
      }]
    },
    daily: [
      {
        temp: {
          min: 0,
          max: 0,
        },
        weather: [{
          main: 'No place Selected'
        }]
      }
    ]
  }
}

export const WeatherApp = () => {
  const initialState = useReducer(appReducer, defaultState);
  return (
    <AppContext.Provider value={initialState}>
        <main className='main__container'>
          <MainWeatherDisplay />
        </main>
    </AppContext.Provider>
  );
};
