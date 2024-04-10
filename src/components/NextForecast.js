import React from "react";
import { WEATHER_ICON } from "../constant/constant";

const NextForecast = ({forecast}) => {
    // Function to format hours in AM/PM format
    const formatHour = (hour) => {
      const date = new Date(hour);
      const formattedHour = date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      return formattedHour;
    };

  return (
    <>
      <div>
        <p>{formatHour(forecast.dt_txt)}</p>
        <img src={WEATHER_ICON + forecast.weather[0]?.icon + '.png'} alt="forecast.weather[0].description" />
        <p>{forecast.main.temp}°C</p>
      </div>
    </>
  );
};

export default NextForecast;
