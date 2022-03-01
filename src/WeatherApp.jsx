import React, { useEffect, useReducer } from 'react';
import { MainWeatherDisplay } from './components/information/MainWeatherDisplay';
import { AppContext } from './context/AppContext';
import { appReducer } from './reducers/appReducer';
import { getLocalStorage } from './helpers/getLocalStorage';
import { defaultState } from './utils/demoData';
import { types } from './types';
import getWeatherData from './helpers/getWeatherData';


import './assets/styles/index.css';

const init = () => {
  const lastPlace = getLocalStorage('lastPlace');
  if (lastPlace) {
    return {
      ...defaultState,
      place: lastPlace
    }
  } else {
    return defaultState;
  }
}

export const WeatherApp = () => {
  const initialState = useReducer(appReducer, {}, init);
  const [state, dispatch] = initialState;
  useEffect(() => {
    if (state.place.longitude && state.place.latitude) {
      getWeatherData(state.place).then(data => {
        dispatch({
          type: types.infoUdapte,
          payload: {
            place: state.place,
            weatherStats: data
          }
        })
      })
    }
  }, [])

  return (
    <AppContext.Provider value={initialState}>
        <main className='main__container'>
          <MainWeatherDisplay />
        </main>
    </AppContext.Provider>
  );
};
