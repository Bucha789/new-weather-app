import React, { useEffect } from 'react'
import { CurrentWeatherDisplay } from './CurrentWeatherDisplay'
import { TodayHightlightsDisplay } from './TodayHightlightsDisplay'
import { WeekWeatherDisplay } from './WeekWeatherDisplay'
import '../../assets/styles/MainWeather.css';
export const MainWeatherDisplay = () => {


  return (
    <section className='weather-display__container'>
      <CurrentWeatherDisplay />
      <WeekWeatherDisplay />
      <TodayHightlightsDisplay />
    </section>
  )
}
