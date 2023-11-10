import React from "react";
import WeatherCarrusel from "../molecules/WeatherCarrusel";
import {
  useWeatherHourStore,
  useWeatherDayStore,
  useWeatherStore,
} from "../hooks/useWeather";
import UvCard from "../atoms/UvCard";
import WindCard from "../atoms/WindCard";
const ExtraWeaterInfo = () => {
  // const {...nest} = useWeatherStore();

  const { wind_speed, wind_deg, pressure } = useWeatherStore();

  const { weather: weatherHour } = useWeatherHourStore();
  const { weather: weatherDay } = useWeatherDayStore();

  return (
    <div class="flex flex-col justify-between h-full">
      <div class="flex flex-col h-2/3 justify-around w-full">
        <WeatherCarrusel
          Title="Pronostico cada 3 horas"
          WeatherList={weatherHour}
        />
        <WeatherCarrusel
          Title="Pronostico de los proximos 15 dias"
          WeatherList={weatherDay}
        />
      </div>
      <div class="flex flex-row h-1/3 justify-around items-center">
        <UvCard
          Title="Presion"
          BigData={pressure}
          desc="Hpa"
          info="Presion Atmosferica"
        />
        <WindCard Title="Viento" BigData={wind_speed} DGData={wind_deg} />
      </div>
    </div>
  );
};

export default ExtraWeaterInfo;
