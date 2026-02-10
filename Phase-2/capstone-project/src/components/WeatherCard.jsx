import React from "react";
import useData from "../context/DataContext";

const WeatherCard = () => {
  // Accessing weather data from the context
  const { data } = useData();

  // Function to map weather conditions to corresponding video files
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
    // Video background with a shade overlay for better text visibility
    <div className="relative videoWrapper h-[60vh] mt-[10vh] w-[80%] overflow-hidden rounded-4xl sm:mt-[10vh] sm:h-[70vh] md:mt-[10vh] md:h-[70vh] lg:w-[90%]">
      <video
        className="h-full w-full object-cover rounded-4xl"
        autoPlay
        loop
        playsInline
        muted
        preload="metadata"
        src={getVideoForWeather(data?.weather?.[0]?.main)}
      ></video>
      <div className="shade flex flex-col w-full h-full absolute top-0 left-0 bg-black/30 rounded-4xl text-white">
        <p className="font-bold text-xl absolute mt-5 ml-5 xl:text-2xl">
          {data?.name} Weather Conditions
        </p>
        <div className="allInOneContainer h-full flex flex-col justify-between sm:flex-row md:flex-col lg:h-full lg:flex-row">
          <div className="dataWrapper flex gap-3 border-3 border-blue-300 w-max p-3 rounded-xl self-center mt-[50%] sm:mt-[10%] sm:ml-5 md:mt-[50%] md:ml-0 lg:mt-0 lg:self-end lg:ml-7 lg:mb-7">
            <div className="main flex flex-col justify-center items-center">
              <p className="text-2xl font-bold">{data?.main?.temp} </p>
              <p className="text-2xl font-bold">°C</p>
            </div>
            <div className="secondary">
              <p>{data?.weather?.[0]?.main}</p>
              <p className="font-semibold">
                <span className="text-sm">Feels Like:</span>{" "}
                {data?.main?.feels_like}°C
              </p>
              <p className="font-semibold">
                <span className="text-sm">Humidity:</span>{" "}
                {data?.main?.humidity}%
              </p>
            </div>
          </div>
          <div className="windDataWrapper relative flex h-[30%] sm:h-full sm:w-[40%] md:h-[30%] md:w-full lg:self-end lg:w-[60%] lg:h-[40%]">
            <div className="windTextConatiner absolute bg-black/40 h-full w-[50%] py-3 px-5 rounded-l-4xl flex flex-col justify-center items-center sm:px-1 sm:w-[60%] md:px-5 md:w-[50%]">
              <p className="font-semibold text-lg mb-3 md:text-2xl">Wind Speed</p>
              <p className="">{(data?.wind?.speed * 3.6).toFixed(2)} km/h</p>
            </div>
            <video
              src={"/Wind-speed.mp4"}
              autoPlay
              loop
              playsInline
              muted
              preload="metadata"
              className="w-full object-cover rounded-4xl object-top"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
