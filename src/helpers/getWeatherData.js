export default function getWeatherData ({latitude, longitude}) {
  const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts,hourly,minutely&appid=b65b093b5ad7e6015ad9df8767f11bfa&units=metric`
  return(
    fetch(API)
    .then(res => res.json())
    .then(response => response)
    .catch(res => console.log(res))
  )
}