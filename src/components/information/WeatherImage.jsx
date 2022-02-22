import React from 'react'
import * as weatherImages from '../../assets/images'

export const WeatherImage = ({state}) => {
  let image;

  switch(state) {
    case 'Clear':
      image = weatherImages.clearIcon
      break;
    case 'Clouds':
      image = weatherImages.lightCloudIcon
      break;
    case 'Snow':
      image = weatherImages.snowIcon;
      break;
    case 'Thunderstom':
      image = weatherImages.thunderstormIcon;
      break;
    case 'Rain':
      image = weatherImages.heavyRainIcon;
      break;
    default: 
      image = weatherImages.showerIcon;
  }  
  return (
    <div>
      <img src={image} alt={state} />
    </div>
  )
}
