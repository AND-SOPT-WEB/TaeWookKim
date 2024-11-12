const formatDate = (timestamp) => {
    const dateObj = new Date(timestamp);
  
    let [year, month, day, hour, minute, second] = [
      dateObj.getFullYear(),
      dateObj.getMonth() + 1,
      dateObj.getDate(),
      dateObj.getHours(),
      dateObj.getMinutes(),
      dateObj.getSeconds(),
    ];
  
    const period = hour >= 12 ? '오후' : '오전';
    hour = hour % 12 || 12;
  
    const pad = (num) => num.toString().padStart(2, '0');
    const formattedDate = `${year}.${pad(month)}.${pad(day)}`;
    const formattedTime = `${period} ${pad(hour)}시 ${pad(minute)}분 ${pad(second)}초`;
    return `${formattedDate} ${formattedTime}`;
  };
  
  export default formatDate;