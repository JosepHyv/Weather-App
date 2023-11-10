import React from "react";
import WeatherCard from "../atoms/WeatherCard";
import { render } from "react-dom";

const WeatherCarrusel = ({ Title = "Example Title", WeatherList = [] }) => {
  const ShowData = () => {
    const renderCards = WeatherList.map((weather) => {
      return (
        <WeatherCard
          Title={weather.title}
          Temp={weather.temp}
          Icon={weather.icon}
          desc={weather.desc}
        />
      );
    });

    if (!renderCards.length)
      return (
        <div class="p-10 items-center w-full text-center ">
          <p class="text-4xl text-blue-50 text-opacity-50 font-semibold ">
            No hay data para mostrar
          </p>
        </div>
      );
    return <div class="flex space-x-4">{renderCards}</div>;
  };

  return (
    <div class="bg-gray-700 bg-opacity-30 backdrop-blur-md w-full h-2/5 flex flex-col justify-start rounded-2xl p-3 shadow-md">
      <div class="border-b-2 mt-3 mb-5">
        <h2 class="text-start text-xl font-medium text-blue-50 text-opacity-50 capitalize">
          {Title}
        </h2>
      </div>
      <div class="flex flex-row justify-between overflow-x-auto scrollbar-thin w-auto scrollbar-thumb-gray-400 scrollbar-rounded-full">
        {ShowData()}
      </div>
    </div>
  );
};

export default WeatherCarrusel;
