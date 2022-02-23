export default function getWeekDates() {
  const msecondsInOneDay = 86400000; 
  const todayDate = new Date();
  const weekDates = []
  for (let i = 0; i < 8; i++) {
    let day;
    if(i !== 0) {
      day = new Date(todayDate.getTime() + (msecondsInOneDay * i))
    }
    if (i === 0) {
      day = todayDate
    }
    const todayDateString = day.toDateString();
    const [dayName, month, dayNumber] =  todayDateString.split(' ')
    weekDates.push(`${dayName}, ${dayNumber} ${month}`)
  }
  return weekDates
}