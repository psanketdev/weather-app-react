import { useEffect } from "react";
import apiKey from "../constant/apiKey";
import { fetchWeatherData } from "../constant/constant";
import { useDispatch } from "react-redux";
import { addWeatherData } from "../redux/weatherSlice";

const useGetUserLocationAccess = (unit) => {

  const dispatch = useDispatch();

  const getWeather = async (lat, lon, unit) => {
    const url = `${apiKey.base}/weather?lat=${lat}&lon=${lon}&units=${unit}&exclude=hourly,daily&appid=${apiKey.key}`
    const data = await fetchWeatherData(url);
    dispatch(addWeatherData(data));
  }

  const getPosition = (options) => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  const getUserLocationAccess = () => {
    if (navigator.geolocation) {
      getPosition()
        .then((position) => {
          getWeather(position.coords.latitude, position.coords.longitude, unit);
        })
        .catch((error) => {
          //If user denied location service then standard location weather will le shown on basis of latitude & latitude.
          getWeather(28.67, 77.22, unit);
          alert(
            "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
          );
          throw new Error(error.message);
        });
    } else {
      alert("Geolocation not available");
    }
  };


  useEffect(() => {
    getUserLocationAccess();
    const timerID = setInterval(() => getUserLocationAccess(), 60*1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);
};

export default useGetUserLocationAccess;
