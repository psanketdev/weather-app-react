import { useEffect, useState } from "react";
import { fetchWeatherData } from "../constant/constant";
import apiKey from "../constant/apiKey";

const useGetUvData = (weatherData) => {
  const [uv, setUv] = useState(null);

  const fetchUVIndex = async () => {
    const url = `${apiKey.base}/uvi?lat=${weatherData?.coord?.lat}&lon=${weatherData?.coord?.lon}&appid=${apiKey.key}`;
    const data = await fetchWeatherData(url);
    setUv(data.value);
  };

  useEffect(() => {
    fetchUVIndex();
  }, [])

  return uv;
};

export default useGetUvData;

