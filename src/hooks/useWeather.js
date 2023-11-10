import { create } from "zustand";

const useWeatherStore = create((set) => ({
  icon: "",
  weather: 0,
  description: "---",
  precipitation: "0 mm",
  visibility: "0 Km",
  temp: 0,
  feels: "0°C",
  humidity: "0%",
  wind_speed: "0",
  min_temp: "0°C",
  max_temp: "0°C",
  pressure: 0,
  wind_deg: 0,
  parse: (data) => {
    const { weather: weat, base, main, visibility, rain, wind: wd } = data;
    set({ description: weat[0].description });
    set({ weather: main.temp.toFixed(0) });
    set({ feels: `${main.feels_like.toFixed(0)}°C` });
    set({ humidity: main.humidity });
    set({ min_temp: `${main.temp_min.toFixed(0)}°C` });
    set({ max_temp: `${main.temp_max.toFixed(0)}°C` });
    set({ visibility: `${(visibility / 1000).toFixed(1)} Km` });
    if (rain !== undefined && "1h" in rain) {
      set({ precipitation: `${rain["1h"]} mm` });
    } else {
      set({ precipitation: "0 mm" });
    }
    set({ wind_speed: `${wd.speed}` });
    set({pressure: main.pressure})
    set({ wind_deg: `${wd.deg}` });
    set({ humidity: `${main.humidity}%` });
  },
}));

const useWeatherHourStore = create((set) => ({
  weather: [],
  parse: (data) => {
    const { list } = data;
    // console.log(data);
    const full_list = [];
    list.forEach((element) => {
      const { dt_txt: title, main, weather: wt } = element;

      const data = {};
      const date = new Date(title);
      data.title = `${date.getDate() - 1}/${
        date.getMonth() + 1
      } - ${date.getHours()}:${date.getMinutes()}`;
      data.temp = Number(main.temp.toFixed(0));
      data.icon = `https://openweathermap.org/img/wn/${wt[0].icon}.png`;
      data.desc = wt[0].description;
      full_list.push(data);
    });
    set({ weather: full_list.slice(0, 15) });
  },
}));

const useWeatherDayStore = create((set) => ({
  weather: [],
  parse: (data) => {
    const { list } = data;
    // console.log(data);
    const full_list = [];
    let lastDay = 0;
    list.forEach((element) => {
      const { dt_txt: title, main, weather: wt } = element;

      const data = {};
      const date = new Date(title);
      data.title = `${date.getDate() - 1}/${date.getMonth() + 1}`;
      data.temp = Number(main.temp.toFixed(0));
      data.icon = `https://openweathermap.org/img/wn/${wt[0].icon}.png`;
      data.desc = wt[0].description;
      console.log(date.getHours());
      if (date.getHours() >= 6 && date.getHours() <= 12) full_list.push(data);
    });
    set({ weather: full_list });
  },
}));

export { useWeatherStore, useWeatherHourStore, useWeatherDayStore };
