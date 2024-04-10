export const WEATHER_ICON = "https://openweathermap.org/img/wn/";

export const fetchWeatherData = async (url) => {
  try {
    const resopnse = await fetch(url);
    if (!resopnse.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await resopnse.json();
    return data;
  } catch(error) {
    handleError('Errro fetching data ' + error.message);
  }
};

export const handleError = (msg) => {
  return msg;
}

export const checkWeatherIcon = (weatherString) => {
  switch (weatherString) {
    case "Haze":
      return { icon: "CLEAR_DAY" };
    case "Clouds":
      return { icon: "CLOUDY" };
    case "Rain":
      return { icon: "RAIN" };
    case "Snow":
      return { icon: "SNOW" };
    case "Dust":
      return { icon: "WIND" };
    case "Drizzle":
      return { icon: "SLEET" };
    case "Fog":
      return { icon: "FOG" };
    case "Smoke":
      return { icon: "FOG" };
    case "Tornado":
      return { icon: "WIND" };
    default:
      return { icon: "CLEAR_DAY" };
  }
};

export const DEFAULTS = {
  color: "yellow",
  size: 80,
  animate: true,
};

export const RESPONSIVE = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4.5,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4.5,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4.5,
    slidesToSlide: 1,
  }
};