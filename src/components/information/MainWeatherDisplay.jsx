import React from 'react'
import { CurrentWeatherDisplay } from './CurrentWeatherDisplay'
import { TodayHightlightsDisplay } from './TodayHightlightsDisplay'
import { WeekWeatherDisplay } from './WeekWeatherDisplay'

export const MainWeatherDisplay = () => {
  return (
    <section className='weather-display__container'>
      <CurrentWeatherDisplay />
      <WeekWeatherDisplay />
      <TodayHightlightsDisplay />
    </section>
  )
}
