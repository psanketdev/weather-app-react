import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({ 
  name: 'weather',
  initialState: {
    weatherData: null,
    weatherUnit: 'metric',
    hoursForecastData: null,
    lastSearchLocation: [],
  },
  reducers: {
    addWeatherData: (state, action) => {
      state.weatherData = action.payload;
    },
    addWeatherUnit: (state, action) => {
      state.weatherUnit = action.payload;
    },
    addHoursForeCastData: (state, action) => {
      state.hoursForecastData = action.payload;
    },
    addLastSearchLocation: (state, action) => {
      state.lastSearchLocation.push(action.payload);
    }
  }
});

export const { addWeatherData, addLastSearchLocation, addWeatherUnit, addHoursForeCastData } = weatherSlice.actions;
export default weatherSlice.reducer; 
