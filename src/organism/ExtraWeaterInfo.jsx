import React from "react";
import WeatherCarrusel from "../molecules/WeatherCarrusel";
import { useWeatherHourStore, useWeatherStore } from "../hooks/useWeather";
import UvCard from "../atoms/UvCard";
import WindCard from "../atoms/WindCard";
const ExtraWeaterInfo = () => {
  // const {...nest} = useWeatherStore();

  const climaPorHora = [
    {
      title: "11:00",
      temp: 20,
      desc: "ejemplo",
      icon: "https://cdn-icons-png.flaticon.com/256/4804/4804221.png",
    },
    {
      title: "11:00",
      temp: 20,
      icon: "https://cdn-icons-png.flaticon.com/256/4804/4804221.png",
    },
    {
      title: "11:00",
      temp: 20,
      icon: "https://cdn-icons-png.flaticon.com/256/4804/4804221.png",
    },
    {
      title: "11:00",
      temp: 20,
      icon: "https://cdn-icons-png.flaticon.com/256/4804/4804221.png",
    },
    {
      title: "11:00",
      temp: 20,
      icon: "https://cdn-icons-png.flaticon.com/256/4804/4804221.png",
    },
    {
      title: "11:00",
      temp: 20,
      icon: "https://cdn-icons-png.flaticon.com/256/4804/4804221.png",
    },
    {
      title: "11:00",
      temp: 20,
      icon: "https://cdn-icons-png.flaticon.com/256/4804/4804221.png",
    },
    {
      title: "11:00",
      temp: 20,
      icon: "https://cdn-icons-png.flaticon.com/256/4804/4804221.png",
    },
    {
      title: "11:00",
      temp: 20,
      icon: "https://cdn-icons-png.flaticon.com/256/4804/4804221.png",
    },
    {
      title: "11:00",
      temp: 20,
      icon: "https://cdn-icons-png.flaticon.com/256/4804/4804221.png",
    },
    {
      title: "11:00",
      temp: 20,
      icon: "https://cdn-icons-png.flaticon.com/256/4804/4804221.png",
    },
    {
      title: "11:00",
      temp: 20,
      icon: "https://cdn-icons-png.flaticon.com/256/4804/4804221.png",
    },
    {
      title: "11:00",
      temp: 20,
      icon: "https://cdn-icons-png.flaticon.com/256/4804/4804221.png",
    },
    {
      title: "11:00",
      temp: 20,
      icon: "https://cdn-icons-png.flaticon.com/256/4804/4804221.png",
    },
  ];

  const { weather, parse } = useWeatherHourStore();
  console.log(weather);

  return (
    <div class="flex flex-col justify-between h-full">
      <div class="flex flex-col h-2/3 justify-around">
        <WeatherCarrusel
          Title="Pronostico cada 3 horas"
          WeatherList={weather}
        />
        <WeatherCarrusel
          Title="Pronostico de los proximos 16 dias"
          WeatherList={climaPorHora}
        />
      </div>
      <div class="flex flex-row h-1/3 justify-around items-center">
        <UvCard />
        <WindCard />
      </div>
    </div>
  );
};

export default ExtraWeaterInfo;
