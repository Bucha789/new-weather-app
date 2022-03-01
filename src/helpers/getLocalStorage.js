
export const getLocalStorage = (key) => {
  const lastPlace = JSON.parse(localStorage.getItem(key));
  return lastPlace;
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value)
}