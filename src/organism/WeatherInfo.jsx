import React from "react";
import { useState } from "react";
import { useWeatherStore } from "../hooks/useWeather";
import Card from '../atoms/InfoCard';

const Info = () => {

  const [ciudad, setCiudad] = useState('');
  const {weather, description} = useWeatherStore();
  return (
    <div class="flex-auto flex-col justify-start h-full rounded-md">
        <div class="h-1/3 justify-around align-middle text-center pt-10">
            <p class=' my-10 text-9xl text-white font-semibold drop-shadow-2xl'>{weather}°C</p>
            <p class=" text-5xl drop-shadow-md text-white font-medium">Dia con nubes</p>
        </div>
        <div class="flex justify-around h-1/2 ">
          <div class="flex flex-col justify-around w-auto ">
            <Card Title='Sensacion Termica' BigData="28°C"/>
            <Card Title='Precipitaciones'/>
          </div>
          <div class="flex flex-col justify-around w-auto">
            <Card Title='Visibilidad'/>
            <Card Title='Humedad'/>
          </div>
        </div>

    </div>
  );
};

export default Info;
