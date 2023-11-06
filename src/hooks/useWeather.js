import {create} from 'zustand';

const useWeather = create((set) => ({
    body: {},
    gt: () => set((state) => ({body: state.body}))
}))

export default useWeather;