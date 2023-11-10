import React from "react";

const WindCard = ({
  Title = "Title Example",
  BigData = "0",
  DGData = "0",
  STitle = "Km",
  TTitle = "Gust",
  info = "This is an info example",
  descroption = "Example",
}) => {
  return (
    <div class="flex flex-row rounded-2xl  h-52 justify-around bg-opacity-30 bg-gray-700 border-gray-400 shadow-md border-opacity-10 backdrop-blur-md text-white px-10 py-5">
      <div class=" mx-2">
        <p class="text-2xl mb-3 drop-shadow-2xl text-blue-50 text-opacity-50 font-medium">
          {Title}
        </p>
        <div class="flex flex-row border-b-2">
          <p class="text-5xl  self-center m-2">{BigData}</p>
          <div class="flex flex-col justify-center">
            <p class="text-2xl drop-shadow-xl font-normal text-blue-50 text-opacity-50 ">
              {STitle}
            </p>
          </div>
        </div>
        <div class="flex flex-row">
          <p class="text-5xl  self-center m-2">{DGData}</p>
          <div class="flex flex-col justify-center">
            <p class="text-2xl drop-shadow-xl font-normal text-blue-50 text-opacity-50 ">
              {TTitle}
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center self-center">
        <img
          src="https://png.pngtree.com/png-clipart/20230109/ourmid/pngtree-compass-rose-with-ring-ethnic-png-image_6557643.png"
          class="w-44 invert items-center justify-center"
        />
      </div>
    </div>
  );
};

export default WindCard;
