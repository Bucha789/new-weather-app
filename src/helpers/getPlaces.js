export const getPlaces = (place) => {
  const URL_API = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURI(
    place
  )}&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyDetjzC6BRLmDHiQZE-V7lM9j6Fph179uM`;
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
