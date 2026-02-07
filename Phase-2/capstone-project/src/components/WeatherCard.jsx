import React from "react";
import useData from "../context/DataContext";

const WeatherCard = () => {
  const { data } = useData();

  function getVideoForWeather(condition) {
    switch (condition) {
      case "Thunderstorm":
        return "Thunderstorm.mp4";
      case "Drizzle":
        return "Drizzle.mp4";
      case "Rain":
        return "Rain.mp4";
      case "Snow":
        return "Snow.mp4";
      case "Mist":
        return "Mist.mp4";
      case "Smoke":
        return "Smoke.mp4";
      case "Haze":
        return "Haze.mp4";
      case "Dust":
        return "Dust.mp4";
      case "Fog":
        return "Fog.mp4";
      case "Sand":
        return "Dust.mp4";
      case "Ash":
        return "Ash.mp4";
      case "Squall":
        return "Tornado.mp4";
      case "Tornado":
        return "Tornado.mp4";
      case "Clear":
        return "Clear.mp4";
      case "Clouds":
        return "Clouds.mp4";
      default:
        return "Clear.mp4";
    }
  }

  return (
    <div className="relative videoWrapper h-[80%] mt-[10vh] w-[80%] sm:mt-[10vh] sm:h-[60%] md:mt-[10vh] md:h-[70%] lg:w-[90%]">
      <video
        className="h-full w-full object-cover rounded-4xl"
        autoPlay
        loop
        playsInline
        muted
        preload="metadata"
        src={getVideoForWeather(data?.weather?.[0]?.main)}
      ></video>
      <div className="shade w-full h-full absolute top-0 left-0 bg-black/50 rounded-4xl"></div>
    </div>
  );
};

export default WeatherCard;
