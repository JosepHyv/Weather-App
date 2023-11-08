import React from 'react';
import WeatherCarrusel from '../molecules/WeatherCarrusel';
import { useWeatherStore } from '../hooks/useWeather';
import UvCard from '../atoms/UvCard';
import WindCard from '../atoms/WindCard';
const  ExtraWeaterInfo = () => {
    
    // const {...nest} = useWeatherStore();
    
    const climaPorHora = [

        {
            title: '11:00',
            temp: 20,
            icon:'https://cdn-icons-png.flaticon.com/256/4804/4804221.png',
        },
        {
            title: '11:00',
            temp: 20,
            icon:'https://cdn-icons-png.flaticon.com/256/4804/4804221.png',
        },
        {
            title: '11:00',
            temp: 20,
            icon:'https://cdn-icons-png.flaticon.com/256/4804/4804221.png',
        },
        {
            title: '11:00',
            temp: 20,
            icon:'https://cdn-icons-png.flaticon.com/256/4804/4804221.png',
        },
        {
            title: '11:00',
            temp: 20,
            icon:'https://cdn-icons-png.flaticon.com/256/4804/4804221.png',
        },
        {
            title: '11:00',
            temp: 20,
            icon:'https://cdn-icons-png.flaticon.com/256/4804/4804221.png',
        },
        {
            title: '11:00',
            temp: 20,
            icon:'https://cdn-icons-png.flaticon.com/256/4804/4804221.png',
        },
        {
            title: '11:00',
            temp: 20,
            icon:'https://cdn-icons-png.flaticon.com/256/4804/4804221.png',
        },
        {
            title: '11:00',
            temp: 20,
            icon:'https://cdn-icons-png.flaticon.com/256/4804/4804221.png',
        },
        {
            title: '11:00',
            temp: 20,
            icon:'https://cdn-icons-png.flaticon.com/256/4804/4804221.png',
        },
        {
            title: '11:00',
            temp: 20,
            icon:'https://cdn-icons-png.flaticon.com/256/4804/4804221.png',
        },
        {
            title: '11:00',
            temp: 20,
            icon:'https://cdn-icons-png.flaticon.com/256/4804/4804221.png',
        },
        {
            title: '11:00',
            temp: 20,
            icon:'https://cdn-icons-png.flaticon.com/256/4804/4804221.png',
        },
        {
            title: '11:00',
            temp: 20,
            icon:'https://cdn-icons-png.flaticon.com/256/4804/4804221.png',
        }
    ]

    return (
        <div class='flex flex-col h-full justify-around'>
            <WeatherCarrusel Title="Pronostico por hora" WeatherList={climaPorHora}/>
            <WeatherCarrusel Title="Pronostico de los proximos 10 dias" WeatherList={climaPorHora}/>
            <div class="flex flex-row justify-evenly">
                <UvCard/>
                <WindCard/>

            </div>
        </div>
    )
};

export default ExtraWeaterInfo;