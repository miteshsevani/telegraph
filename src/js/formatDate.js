// Format date from comments to Day Month Year, hour:minutes format
function formatDate(dateToFormat, source) {
  const date = new Date(dateToFormat);

  // Get Day of the week
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayOfWeek = date.getDay();
  dayOfWeek = days[dayOfWeek];

  // Get date of the day
  const day = date.getDate();

  // Get month
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];

  // Get year
  const year = date.getFullYear();

  // Get hour
  let hours = date.getHours() - 1; // minus 1 to offset bst time
  const ampm = hours >= 12 ? 'PM' : 'AM'; // Detrmine am or pm
  hours = hours % 12;
  hours = hours ? hours : 12;

  //  Get minutes
  let minutes = date.getMinutes();

  // Add padding to minutes and hours below 10
  if(hours < 10) {
    hours = `0${hours}`;
  }

  if(minutes < 10) {
    minutes = `0${minutes}`;
  }

  // Return formatted date
  return source === 'comments' ? `${day} ${month} ${year}, ${hours}:${minutes}${ampm}` : `${dayOfWeek} ${day} ${month} ${year}, ${hours}:${minutes}${ampm}`;

}

module.exports = formatDate;