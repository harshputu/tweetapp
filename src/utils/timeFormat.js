
export const getCompleteDateAndTime = (time) => {
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
  
    const monthList = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  
    let date = new Date(time);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let newFormat = date.getHours() >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    let day = weekday[date.getDay()];
    let dateOfMonth = date.getDate();
    let year = date.getFullYear();
    let month = monthList[date.getMonth()];
  
    const formatted = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2);
    const formattedValue = `${day}, ${month} ${dateOfMonth}, ${year} ${formatted} ${newFormat}`;
  
    return formattedValue;
  };