import React, { useContext, useState } from 'react';

import cloudBackground from '../../assets/images/Cloud-background.png';

import '../../assets/styles/CurrentWeather.css';
import { AppContext } from '../../context/AppContext';
import getTodayDate from '../../helpers/getTodayDate';
import { SearchPlacesContainer } from '../search/SearchPlacesContainer';
import { WeatherImage } from './WeatherImage';

export const CurrentWeatherDisplay = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [ state ] = useContext(AppContext);
  const { weatherStats, place } = state;
  const index = place.name.lastIndexOf(',');
  const name = place.name.slice(0, index)
  const {temp, weather} = weatherStats.current;
  const [description] = weather;
  const [dayName, month, dayNumber] = getTodayDate()
  return (
    <div className='current-weather__container'>
      {
        showSearch &&
        <SearchPlacesContainer hidden={setShowSearch} />
      }
      <div className='current-weather__controls'>
        <button onClick={() =>setShowSearch(true)}>Search for places</button>
        <span>
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
            <span>°C</span>
          </h2>
          <span>{description.main}</span>
          <p>
            Today<span>•</span>
            {dayName}, {dayNumber} {month}
          </p>
          <p>
            <i className='fas fa-map-marker-alt'></i> {name}
          </p>
        </div>
      </div>
    </div>
  );
};
