export const defaultState = {
  place: {
    name: 'Nothing'
  }, 
  weatherStats: {
    current: {
      temp: 0,
      humidity: 0,
      win_deg: 0,
      win_speed: 0,
      visibility: 0,
      pressure: 0,
      weather: [{
        main: 'No place Selected'
      }]
    },
    daily: [
      {
        temp: {
          min: 0,
          max: 0,
        },
        weather: [{
          main: 'No place Selected'
        }]
      }
    ]
  }
}