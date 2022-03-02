export const getPlaces = (place) => {
  const URL_API =`https://proxy-google-mu.vercel.app/places/${place}`
  return fetch(URL_API)
    .then((res) => res.json())
    .then((data) => {
      const { candidates } = data;
      if (Array.isArray(candidates)) {
        return candidates.map(item => {
          return {
            name: item.formatted_address,
            latitude: item.geometry.location.lat,
            longitude: item.geometry.location.lng
          }
        })
      } else {
        return []
      }
    })
    .catch(console.log)
};
