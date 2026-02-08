import React from "react";
import ForecastList from "./ForecastList";
import WeatherCard from "./WeatherCard";

const CurrentWeather = () => {
  return (
    // Main wrapper for the current weather and forecast list on larger screens, with responsive design for different screen sizes
    <div className="mainWrapper w-full flex flex-col items-center gap-5 pt-10 sm:gap-2 sm:pt-5 md:gap-5 lg:w-[80vw]">
      <WeatherCard />
      <ForecastList />
      {/* Footer can be added here */}
      <footer className="py-3 w-full text-center dark:bg-slate-900 flex items-center justify-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">&copy; 2026 Rishi's App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CurrentWeather;
