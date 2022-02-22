import React, { useState } from 'react';

import cloudBackground from '../../assets/images/Cloud-background.png';

import '../../assets/styles/CurrentWeather.css';
import { SearchPlacesContainer } from '../search/SearchPlacesContainer';

export const CurrentWeatherDisplay = () => {

  const [showSearch, setShowSearch] = useState(false);
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
        {/* {weather ? <ImageDisplay state={weather[0].main} /> :  */}
        <h2 className='null__search'>?</h2>    
        <div className='current-weather__temp'>
          <h2>
            15
            <span>°C</span>
          </h2>
          <span>Not Place Selected</span>
          <p>
            Today<span>•</span>
            Sun, 5 Jun
          </p>
          <p>
            <i className='fas fa-map-marker-alt'></i> Nogales
          </p>
        </div>
      </div>
    </div>
  );
};
