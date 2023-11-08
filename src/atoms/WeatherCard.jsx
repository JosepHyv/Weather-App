import React from "react";

const WeatherCard = ({Title, Temp, Icon}) => {
    return (
        <div class="flex flex-col justify-around text-center m-5 p-5 rounded-md hover:bg-gray-600 hover:bg-opacity-50 backdrop-blur-md">
            <p class="font-light text-white text-sm mt-5">{Title}</p>
            <p class="font-semibold text-white text-2xl">{Temp}°C</p>
            <img src={Icon} class="w-full h-10"/>

        </div>
    )
};

export default WeatherCard;