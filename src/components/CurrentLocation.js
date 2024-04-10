import React, { useRef, useState } from "react";

import Forcast from "./Forcast";
import useGetUserLocationAccess from "../hooks/useGetUserLocationAccess";
import useGetDateTime from "../hooks/useGetDateTime";
import { useSelector, useDispatch } from "react-redux";
import {
  DEFAULTS,
  LOADER,
  checkWeatherIcon,
  fetchWeatherData,
} from "../constant/constant";
import ReactAnimatedWeather from "react-animated-weather";
import apiKey from "../constant/apiKey";
import { addLastSearchLocation, addWeatherData } from "../redux/weatherSlice";
import Error from "./Error";
import useBackgroundImg from "../hooks/useBackgroundImg";
import Search from "./Search";

const CurrentLocation = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const city = useRef(null);

  const dispatchSearchLocationWeather = useDispatch();
  const searchLocation = useDispatch();

  const weatherData = useSelector((state) => state.weather?.weatherData);
  const weatherUnit = useSelector((state) => state.weather?.weatherUnit);

  // This cutome hook for goeloaction
  useGetUserLocationAccess(weatherUnit);

  // This hooks for get date & time
  const currentDate = useGetDateTime();
  const currentTime = useGetDateTime();

  // Get Background Images
  const backguoundImage = useBackgroundImg(weatherData);

  const responseIcon = checkWeatherIcon(weatherData?.weather[0]?.main);
  const defaults = DEFAULTS;

  const handleSearch = async () => {
    if (city.current.value !== "") {
      try {
        const url = `${apiKey.base}/weather?q=${city.current.value}&units=metric&appid=${apiKey.key}`;
        const data = await fetchWeatherData(url);
        dispatchSearchLocationWeather(addWeatherData(data));
        searchLocation(addLastSearchLocation(city.current.value));
        city.current.value = "";
        setErrorMsg(null);
      } catch (error) {
        setErrorMsg("Failed to fetch weather data. Please try again later.");
        setTimeout(() => {
          setErrorMsg(null);
        }, 3000);
      }
    } else {
      setErrorMsg("Please enter a search location");
      setTimeout(() => {
        setErrorMsg(null);
      }, 3000);
    }
  };

  return (
    <section className={`wather-main city ${backguoundImage}`}>
      <div className="container">
        <Search handleSearch={handleSearch} city={city} />
        {weatherData ? (
          <div className="row">
            <div className="current col-lg-6">
              <div className="d-flex justify-content-between align-content-center"></div>
              <h2 className="font-weight-bold mb-lg-5">
                {weatherData.name}, {weatherData.sys?.country}
              </h2>
              <div className="weather-temp d-flex align-items-end justify-content-between mb-lg-5">
                <div className="relative">
                  <h3>
                    {weatherData.main?.temp}
                    <sup>°</sup>
                    <span>C</span>
                  </h3>
                  <h4>Feels like {weatherData.main?.feels_like}</h4>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column">
                  {responseIcon && (
                    <div className="mb-2">
                      <ReactAnimatedWeather
                        icon={responseIcon.icon}
                        color={defaults.color}
                        size={defaults.size}
                        animate={defaults.animate}
                      />
                    </div>
                  )}
                  <span className="d-block text-white">
                    {weatherData.weather[0].main}
                  </span>
                </div>
              </div>
              <div className="weather-date d-flex justify-content-between align-items-center">
                <h5>
                  {currentDate.date}, <span>{currentTime.time}</span>
                </h5>
                <div>
                  <span className="d-block font-weight-bold">Day 3°</span>
                  <span className="d-block font-weight-bold">Night -1°</span>
                </div>
              </div>
            </div>
            <div className="forcast col-lg-6">
              <Forcast />
            </div>
          </div>
        ) : (
          <div className="py-2">
            <p className="text-danger">
              You enter a wrong location, Please try again!
            </p>
          </div>
        )}
      </div>
      {errorMsg != null ? (
        <Error error={errorMsg} active={errorMsg != null ? "active" : ""} />
      ) : (
        ""
      )}
    </section>
  );
};

export default CurrentLocation;
