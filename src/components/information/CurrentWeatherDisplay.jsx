import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { SearchPlacesContainer } from '../search/SearchPlacesContainer';
import { WeatherImage } from './WeatherImage';
import { types } from '../../types';
import getWeekDates from '../../helpers/getWeekDates';
import getWeatherData from '../../helpers/getWeatherData';
import { setLocalStorage } from '../../helpers/getLocalStorage';
import cloudBackground from '../../assets/images/Cloud-background.png';

import '../../assets/styles/CurrentWeather.css';



export const CurrentWeatherDisplay = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [ state, dispatch ] = useContext(AppContext);
  const { weatherStats, place } = state;
  const index = place.name.lastIndexOf(',');
  const name = place.name.slice(0, index)
  const {temp, weather} = weatherStats.current;
  const [description] = weather;
  const [todayDate] = getWeekDates()


  const handleGetDataWithCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const place = {
        name: 'Your Location,',
        longitude: coords.longitude,
        latitude: coords.latitude
      }
      getWeatherData(coords).then(data => {
        const action = {
          type: types.infoUdapte,
          payload: {
            place,
            weatherStats: data
          }
        }
        setLocalStorage('lastPlace', JSON.stringify(place));
        dispatch(action)
    }
    );
  });
}



  return (
    <div className='current-weather__container'>
      {
        showSearch &&
        <SearchPlacesContainer hidden={setShowSearch} />
      }
      <div className='current-weather__controls'>
        <button onClick={() =>setShowSearch(true)}>Search for places</button>
        <span onClick={handleGetDataWithCurrentLocation}>
          <i className='fas fa-bullseye'></i>
        </span>
      </div>
      <div className='current-weather__state'>
        <img
          className='background'
          src={cloudBackground}
          alt='Cloud-background'
        />
        <WeatherImage state={description.main} /> 
        <div className='current-weather__temp'>
          <h2>
            {parseInt(temp)}
            <span>??C</span>
          </h2>
          <span>{description.main}</span>
          <p>
            Today<span>???</span>
            {todayDate}
          </p>
          <p>
            <i className='fas fa-map-marker-alt'></i> {name}
          </p>
        </div>
      </div>
    </div>
  );
};
