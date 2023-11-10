import React from "react";
import axios from "axios";
import { useState } from "react";
import {
  useWeatherHourStore,
  useWeatherStore,
  useWeatherDayStore,
} from "../hooks/useWeather";
const geourl = `http://api.openweathermap.org/geo/1.0/direct`;
const weatherurl = `https://api.openweathermap.org/data/2.5/weather`;
const wByHourUrl = "https://api.openweathermap.org/data/2.5/forecast";
const wByDayUrl = "https://api.openweathermap.org/data/2.5/forecast/daily";
const appid = import.meta.env.PUBLIC_API_KEY;

const geoparams = {
  q: "",
  limit: 5,
  appid,
};

const Bar = () => {
  const [ciudad, setCiudad] = useState("");
  const { parse } = useWeatherStore();
  const { parse: parseHour } = useWeatherHourStore();
  const { parse: parseDay } = useWeatherDayStore();

  const Search = (event) => {
    if (event.key === "Enter") {
      geoparams.q = ciudad;
      axios.get(geourl, { params: geoparams }).then((response) => {
        const result = response.data;
        if (result.length && "lon" in result[0]) {
          const { lon, lat } = result[0];
          const wparams = { lon, lat, units: "Metric", lang: "ES", appid };
          axios.get(weatherurl, { params: wparams }).then((responses) => {
            // console.log(responses.data);
            parse(responses.data);
          });
          axios.get(wByHourUrl, { params: wparams }).then((responses) => {
            console.log(responses.data);
            parseHour(responses.data);
            parseDay(responses.data);
          });
        }
      });
    }
  };
  return (
    <div class="rounded-full bg-gray-600 bg-opacity-40 backdrop-blur-md mb-3 flex flex-row py-2 shadow-md">
      <img
        src="../../public/location.png"
        class="invert ml-2 h-6 self-center"
      />
      <input
        placeholder="Ingresa el nombre de una Ciudad"
        type="text"
        maxLength={50}
        class="rounded-md p-2 w-full bg-transparent text-white font-medium placeholder-white outline-none"
        onChange={(event) => {
          setCiudad(event.target.value);
        }}
        onKeyDown={Search}
      ></input>
    </div>
  );
};

export default Bar;
