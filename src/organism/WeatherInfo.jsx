import React from "react";
import { useState } from "react";
import { useWeatherStore } from "../hooks/useWeather";
import Card from "../atoms/InfoCard";

const Info = () => {
  const [ciudad, setCiudad] = useState("");
  const {
    weather,
    feels,
    humidity,
    description,
    min_temp,
    max_temp,
    visibility,
    precipitation,
  } = useWeatherStore();
  return (
    <div class="flex-auto flex-col justify-start h-full rounded-md">
      <div class="h-1/3 justify-around align-middle text-center pt-10">
        <p class=" my-10 text-9xl text-white font-semibold drop-shadow-2xl">
          {weather}°C
        </p>
        <div class="flex flex-row justify-around mb-5">
          <p class="text-2xl text-white font-semibold drop-shadow-2xl">
            Min: {min_temp}
          </p>
          <p class="text-2xl text-white font-semibold drop-shadow-2xl">
            Max: {max_temp}
          </p>
        </div>
        <p class=" text-5xl drop-shadow-md text-white font-medium">
          {description}
        </p>
      </div>
      <div class="flex justify-around h-1/2 ">
        <div class="flex flex-col justify-between items-center mt-5 w-1/2">
          <Card
            Title="Sensacion Termica"
            BigData={feels}
            info="La humedad Causa que el clima se sienta mas caliente de lo que en realidad es"
          />
          <Card
            Title="Precipitaciones"
            BigData={precipitation}
            info="Medida durante la ultima hora"
          />
        </div>
        <div class="flex flex-col justify-between items-center mt-5 w-1/2">
          <Card
            Title="Visibilidad"
            BigData={visibility}
            description={"Durante la ultima hora"}
            info={"Medida en Kilometros"}
          />
          <Card
            Title="Humedad"
            BigData={humidity}
            description="Porcentaje de Humedad"
            info="La humedad se mide con base en la medida de la precipitacion y el clima actual"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
