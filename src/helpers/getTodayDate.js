export default function getTodayDate() {
  const date = new Date();
  const today = date.toDateString();
  return today.split(' ')
}