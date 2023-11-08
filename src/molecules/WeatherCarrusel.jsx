import React from "react";
import WeatherCard from "../atoms/WeatherCard";

const WeatherCarrusel = ({Title="Example Title", WeatherList=[]}) => {
    const renderCards = WeatherList.map(weather => {
        return <WeatherCard Title={weather.title} Temp={weather.temp} Icon={weather.icon}/>

    })
    return (
        <div class="bg-gray-700 bg-opacity-30 backdrop-blur-md w-full h-auto flex flex-col justify-around rounded-md p-5 shadow-md">
            <div class="border-b-2 p-2">
                <h2 class='text-start text-xl font-medium text-blue-50 text-opacity-50 capitalize'>
                 {Title}
                 </h2>
            </div>
            <div class="flex flex-row justify-between overflow-x-scroll scrollbar-thin  scrollbar-thumb-gray-400 scrollbar-rounded-full">
                {renderCards}

            </div>
        </div>
    )
}

export default WeatherCarrusel;