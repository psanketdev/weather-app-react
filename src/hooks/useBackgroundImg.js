import { useEffect, useState } from "react";

const useBackgroundImg = (weatherData) => {
  const [bgClass, setBgClass] = useState(null);

  useEffect(() => {
    if(weatherData) {
      let imgString = weatherData.weather[0].main;
      if(imgString.toLowerCase().includes('clear')) {
        setBgClass('clear')
      } else if (imgString.toLowerCase().includes('cloud')) {
        setBgClass('cloud')
      } else if (imgString.toLowerCase().includes('rain') || imgString.toLowerCase().includes('shower')) {
        setBgClass('rain')
      } else if (imgString.toLowerCase().includes('snow')) {
        setBgClass('snow')
      } else if (imgString.toLowerCase().includes('fog')) {
        setBgClass('fog')
      } else if (imgString.toLowerCase().includes('thunder') || imgString.toLowerCase().includes('storm')) {
        setBgClass('thunder')
      } else {
        setBgClass('');
      }
    }
  },  [weatherData, bgClass]);


  return bgClass;
};

export default useBackgroundImg;