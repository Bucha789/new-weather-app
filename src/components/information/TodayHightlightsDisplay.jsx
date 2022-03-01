import React, { useContext, useEffect } from 'react'

import '../../assets/styles/TodayHightlights.css';
import { AppContext } from '../../context/AppContext';
import { getWindDirection } from '../../helpers/getWindDirection';

export const TodayHightlightsDisplay = () => {

  const [state] = useContext(AppContext);
  const {weatherStats} = state;
  const {current} = weatherStats;
  const {humidity, visibility, wind_speed, wind_deg, pressure} = current; 
  const windDirection = getWindDirection(wind_deg)

  useEffect(() => {
    document.querySelector('.progress').style.width = `${humidity}%`
    document.querySelector('#windArrow').style.transform = `translate(-45%, -45%) rotate(${wind_deg - 90}deg)`
  }, [humidity, wind_deg])


  return (
    <div className='today-highlights__container'>
        <h2>Today's Hightlights</h2>
      <div className="hightlights-item__container">
        <div className="hightlights__item">
          <h3>Wind status</h3>
          <p>
            {Math.ceil(wind_speed)}
            <span>Km/h</span>
          </p>
          <div className="wind-speed__container">
            <div className="wind-arrow">
              <i id='windArrow' className="fas fa-location-arrow"></i>
            </div>
            <span>{windDirection}</span>
          </div>
        </div>
        <div className="hightlights__item">
          <h3>Humidity</h3>
          <p>
            {humidity}
            <span>%</span>
          </p>
          <div className="progress-bar__container">
            <div className="checkpoints">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
            <div className="bar">
              <div className="progress"></div>
            </div>
            <span className="percent">%</span>
          </div>
        </div>
        <div className="hightlights__item">
          <h3>Visibility</h3>
          <p>
            {visibility / 10}<span>Km</span>
          </p>
        </div>
        <div className="hightlights__item">
          <h3>Air Pressure</h3>
          <p>
            {pressure}<span>mb</span>
          </p>
        </div>
      </div>
      <span className="credits">create by Juandev01 - devChallenges.io</span>
    </div>
  )
}
