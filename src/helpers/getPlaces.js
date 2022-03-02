export const getPlaces = (place) => {
  const URL_API =`https://proxy-google-mu.vercel.app/places/${place}`
  return fetch(URL_API)
  .then((res) => res.json())
  .then((data) => data)
  .catch(console.log)
};
