import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LocationHistory from "./LocationHistory";
import OtherWeatherData from "./OtherWeatherData";
import HourlyForcast from "./HourlyForcast";
import { useSelector } from "react-redux";

const WeatherTab = () => {
  const weatherData = useSelector((state) => state.weather?.weatherData);
  let locationHistory = useSelector(
    (state) => state.weather?.lastSearchLocation
  );

  return (
    <Tabs className="weather-tabs">
      <TabList>
        <Tab>Today</Tab>
        <Tab>Tomorrow</Tab>
        <Tab>10 days</Tab>
      </TabList>

      <TabPanel>
        <OtherWeatherData weatherData={weatherData} />
        <HourlyForcast weatherData={weatherData} />
        {locationHistory.length === 5 && <LocationHistory />}
      </TabPanel>
      <TabPanel>
        <h2>Tomorrow Weather</h2>
      </TabPanel>
      <TabPanel>
        <h2>10 days Weather</h2>
      </TabPanel>
    </Tabs>
  );
};

export default WeatherTab;
