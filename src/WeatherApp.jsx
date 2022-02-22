import React, { useReducer } from 'react';
import { MainWeatherDisplay } from './components/information/MainWeatherDisplay';
import { AppContext } from './context/AppContext';
import { appReducer } from './reducers/appReducer';

import './assets/styles/index.css';

export const WeatherApp = () => {
  const initialState = useReducer(appReducer, {
    message: 'Hola estoy viendo si estoy conectando bien la app',
  });

  return (
    <AppContext.Provider value={initialState}>
        <main className='main__container'>
          <MainWeatherDisplay />
        </main>
    </AppContext.Provider>
  );
};
