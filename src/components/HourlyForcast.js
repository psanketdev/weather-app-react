import React from "react";
import useSaveHoursForecaseData from "../hooks/useSaveHoursForecastData";
import { useSelector } from "react-redux";
import NextForecast from "./NextForecast";
import Carousel from "react-multi-carousel";
import { RESPONSIVE } from "../constant/constant";
import "react-multi-carousel/lib/styles.css";

const HourlyForcast = ({ weatherData }) => {
  const forecast = useSelector((state) => state?.weather?.hoursForecastData);
  useSaveHoursForecaseData(weatherData);

  return (
    <div ction className="hourly-forcast mb-lg-3">
      <div className="d-flex align-items-center mb-2 mb-lg-3">
        <div className="mr-2">
          <img src="assets/icons/history_toggle_off.svg" alt="history_toggle_off" />
        </div>
        <h3>Hourly Forecast</h3>
      </div>
      {forecast && (
        <Carousel
          responsive={RESPONSIVE}
          swipeable={false}
          draggable={true}
          keyBoardControl={true}
          gap={15}
          arrows={false}
        >
          {forecast.map((forecast) => (
            <NextForecast key={forecast.dt_txt} forecast={forecast} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default HourlyForcast;
