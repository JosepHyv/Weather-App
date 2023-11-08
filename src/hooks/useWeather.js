import {create} from 'zustand';

const useWeatherStore = create((set) => ({
    icon: "",
    weather: 0,
    description: "---",
    precipitation: "0 mm",
    visibility: "0 Km",
    temp: 0,
    feels:"0°C",
    humidity: 0,
    wind_speed: "",
    min_temp: "0°C",
    max_temp: "0°C",
    wind_deg: "",
    parse: (data) => {
        const {weather:weat, base, main, visibility, rain} = data; 
        set({description: weat[0].description});
        set({weather: main.temp.toFixed(0)});
        set({feels: `${main.feels_like.toFixed(0)}°C`})
        set({humidity: main.humidity});
        set({min_temp: `${main.temp_min.toFixed(0)}°C`});
        set({max_temp: `${main.temp_max.toFixed(0)}°C`});
        set({visibility: `${(visibility/1000).toFixed(1)} Km`});
        if("1h" in rain){
            set({precipitation: `${rain['1h']} mm`})
        }

    },
}))

export {useWeatherStore};