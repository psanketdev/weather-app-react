import { useEffect } from "react";
import { fetchWeatherData } from "../constant/constant";
import apiKey from "../constant/apiKey";
import { useDispatch } from "react-redux";
import { addHoursForeCastData } from "../redux/weatherSlice";

const useSaveHoursForecaseData = (weatherData) => {

  const dispatch = useDispatch();

  const fetchHourlyForecast = async () => {
    const url = `${apiKey.base}/forecast?lat=${weatherData?.coord.lat}&lon=${weatherData?.coord?.lon}&appid=${apiKey.key}&units=metric`;
    const data = await fetchWeatherData(url);
    const currentTime = new Date().getTime();
    // Api provide 3hrs 3hrs data i.e fetched next 24 hrs data 
    const filteredData = data.list.filter(forecast => {
      const forecastTime = new Date(forecast.dt_txt).getTime();
      return forecastTime >= currentTime && forecastTime <= currentTime + 24 * 60 * 60 * 1000;
    });

    dispatch(addHoursForeCastData(filteredData));
  };

  useEffect(() => {
    fetchHourlyForecast();
  }, []);
};

export default useSaveHoursForecaseData;