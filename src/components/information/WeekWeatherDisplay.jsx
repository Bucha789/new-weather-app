import React, { useContext } from 'react'

import '../../assets/styles/WeekWeather.css'
import { AppContext } from '../../context/AppContext'
import getWeekDates from '../../helpers/getWeekDates';
import { WeatherImage } from './WeatherImage';


export const WeekWeatherDisplay = () => {

  const [state] = useContext(AppContext);
  const {daily} = state.weatherStats; 
  const weekDates = getWeekDates().filter((item, index) => index !== 0);

  return (
    <div className='week-weather__container'>
      {
        daily.map((day, index) => {
          let dateString = weekDates[index];
          const {min, max} = day.temp;
          const { main } = day.weather[0];
          if (index === 0) {
            dateString = 'Tomorrow'
          }
          if (index > 4) {
            return null
          }
          return <div key={dateString} className="weather-stats__item">
            <h3>{dateString}</h3>
            <WeatherImage state={main} />
            <div>
              <span>{parseInt(min)} °C</span>
              <span>{parseInt(max)} °C</span>
            </div>
          </div>
        })
      }
    </div>
  )
}