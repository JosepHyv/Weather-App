import React from "react";
import { useState } from "react";
import useWeather from "../hooks/useWeather";

const Bar = () => {
  const [ciudad, setCiudad] = useState('');
  const Search = (event) => {
    if(event.key === 'Enter'){
      console.log(ciudad);
    }
  }
  return (
    <div class="rounded-md bg-gray-600 my-3 flex flex-row">
      <img 
        src="../../public/location.png"
        class='invert ml-2 h-6 self-center'
        />
      <input
        placeholder="Ingresa el nombre de una Ciudad"
        type="text"
        maxLength={50}
        class="rounded-md p-2 w-full bg-transparent text-white font-medium placeholder-white outline-none"
        onChange={(event) => {
          setCiudad(event.target.value);
        }}
        onKeyDown={Search}
      ></input>
    </div>
  );
};

export default Bar;