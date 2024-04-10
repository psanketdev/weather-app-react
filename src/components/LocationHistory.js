import React from "react";
import { useSelector } from "react-redux";

const LocationHistory = () => {
  let locationHistory = useSelector((state) =>  state.weather?.lastSearchLocation);
  let newData = new Set(locationHistory);
  let lastFiveData = Array.from(newData).slice(-5); 
  return (
    <div className="location-history">
      <h3 className="mb-3">Recent Search</h3>
      <ul className="d-flex flex-wrap justify-content-lg-between">
        {lastFiveData.map((location, index) => {
          return (
            <li key={index} className="text-capitalize">
              {location}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LocationHistory;