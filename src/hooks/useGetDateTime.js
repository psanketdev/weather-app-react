import { useEffect, useState } from "react";

const useGetDateTime = () => {
  const [date, setDate] = useState(getCurrentDate());
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime()); 
    }, 60000); 

    return () => clearInterval(interval); 
  }, []);

  return {
    date: date,
    time: time,
  }
};

const getCurrentDate = () => {
  const today = new Date();
  const month = today.toLocaleString('default', { month: 'long' });
  const date = today.getDate();
  return month + ' ' + date;
}

const getCurrentTime = () => {
  const today = new Date();
  const hour = today.getHours();
  const minute = today.getMinutes();
  return `${hour}:${minute < 10 ? '0' + minute : minute}`; // Format minute with leading zero if needed
}

export default useGetDateTime;