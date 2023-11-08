import { create } from "zustand";

const useGeolocationStore = create((set) => ({
  name: "",
  lat: 0,
  lon: 0,
  country: "",
  setName: (name) => set(() => ({ name })),
  setLat: (lat) => set(() => ({ la })),
  setLon: (lon) => set(() => ({ lon })),
  setCountry: (country) => set(() => ({ country })),
}));

export { useGeolocationStore };
