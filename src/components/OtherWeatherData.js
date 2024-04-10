import React from "react";
import useGetUvData from "../hooks/useGetUvData";

const OtherWeatherData = ({ weatherData }) => {
  const uv = useGetUvData(weatherData);

  return (
    <ul className="other-weather d-flex flex-wrap justify-content-between justify-content-lg-between">
      <li className="card d-flex align-items-center mr-2">
        <div className="icon mr-2 mr-lg-3">
          <img src="assets/icons/air.svg" alt="Wind Speed" />
        </div>
        <div className="">
          <h5 className="mb-2">Wind Speed</h5>
          <div className="d-flex justify-content-between w-100">
            <h6>{weatherData?.wind?.speed}Km/h</h6>
            <div className="d-flex">
              <img src="assets/icons/arrow_drop_down.svg" alt="arrow down" className="mr-1 arrow" />
              <span>2 km/h</span>
            </div>
          </div>
        </div>
      </li>
      <li className="card d-flex align-items-center">
        <div className="icon mr-2 mr-lg-3">
          <img src="assets/icons/rainy.svg" alt="Rainy" />
        </div>
        <div className="">
          <h5 className="mb-2">Rain Chance</h5>
          <div className="d-flex justify-content-between w-100">
            <h6>{weatherData.rain ? weatherData.rain?.['1h'] : 24}%</h6>
            <div className="d-flex">
            <img src="assets/icons/arrow_drop_up.svg" alt="arrow up" className="mr-1 arrow" />
              <span>10%</span>
            </div>
          </div>
        </div>
      </li>
      <li className="card d-flex align-items-center mr-2">
        <div className="icon mr-2 mr-lg-3">
          <img src="assets/icons/waves.svg" alt="Waves" />
        </div>
        <div className="">
          <h5 className="mb-2">Pressure</h5>
          <div className="d-flex justify-content-between w-100">
            <h6>{weatherData?.main.pressure} hpa</h6>
            <div className="d-flex">
            <img src="assets/icons/arrow_drop_up.svg" alt="arrow up" className="mr-1 arrow" />
              <span>32 hpa</span>
            </div>
          </div>
        </div>
      </li>
      <li className="card d-flex align-items-center">
        <div className="icon mr-2 mr-lg-3">
          <img src="assets/icons/light_mode.svg" alt="Light Mode" />
        </div>
        <div className="">
          <h5 className="mb-2">UV Index</h5>
          <div className="d-flex justify-content-between w-100">
            <h6>{uv}</h6>
            <div className="d-flex">
            <img src="assets/icons/arrow_drop_down.svg" alt="arrow down" className="mr-1 arrow" />
              <span>0.3</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default OtherWeatherData;
