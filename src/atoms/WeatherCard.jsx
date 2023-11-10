import React from "react";

const WeatherCard = ({ Title, Temp, Icon, desc }) => {
  return (
    <div class="border flex flex-col justify-between text-center w-32 m-5 p-2 rounded-2xl hover:bg-gray-600 hover:bg-opacity-50 backdrop-blur-md">
      <p class="font-light text-white text-sm mt-5">{Title}</p>
      <p class="font-semibold text-white text-2xl">{Temp}°C</p>
      <p class="font-light text-white text-sm">
        <italic>{desc}</italic>
      </p>
      <img src={Icon} class="w-full h-10" />
    </div>
  );
};

export default WeatherCard;
