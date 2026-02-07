import React from "react";
import ForecastList from "./ForecastList";
import WeatherCard from "./WeatherCard";

const CurrentWeather = () => {
  return (
    <div className="mainWrapper h-screen w-full flex flex-col items-center gap-5 py-10 sm:gap-2 sm:py-5 md:gap-5 lg:w-[80vw]">
      <WeatherCard />
      <ForecastList />
    </div>
  );
};

export default CurrentWeather;
