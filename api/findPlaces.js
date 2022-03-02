
export default async function findPlaces (req, res, place) {
  console.log(place)
  const URL_API = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURI(place)}&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyDetjzC6BRLmDHiQZE-V7lM9j6Fph179uM`;
  return fetch(URL_API)
    .then(response => response.json())
    .then(data => {
      const { candidates } = data;
      if (Array.isArray(candidates)) {
        return res.send(candidates.map(item => {
          return {
            name: item.formatted_address,
            latitude: item.geometry.location.lat,
            longitude: item.geometry.location.lng
          }
        }))
      } else {
        return res.send([])
      }
    })
    .catch(err => console.log(err))
}