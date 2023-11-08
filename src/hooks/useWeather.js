import {create} from 'zustand';

const useWeatherStore = create((set) => ({
    icon: "",
    weather: "28",
    description: "",
    temp: "",
    feels:"",
    wind_speed: "", 
    wind_deg: "",
    gt: () => set((state) => ({body: state.body}))
}))

export {useWeatherStore};