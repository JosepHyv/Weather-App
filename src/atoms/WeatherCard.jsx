import React from "react";

const WeatherCard = ({ Title, Temp, Icon, desc }) => {
  return (
    <div class="flex flex-col w-32 justify-between text-center items-center my-2 p-2 rounded-2xl hover:bg-gray-600 hover:bg-opacity-50 backdrop-blur-md ">
      <p class="font-normal text-white text-sm mt-2">{Title}</p>
      <p class="font-semibold text-white text-2xl">{Temp}°C</p>
      <p class="font-light text-white text-sm">
        <italic>{desc}</italic>
      </p>
      <img src={Icon} class="items-center w-10 h-10" />
    </div>
  );
};

export default WeatherCard;
