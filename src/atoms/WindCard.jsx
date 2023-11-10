import React from "react";

const WindCard = ({
  Title = "Title Example",
  BigData = "28",
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
          <div class="flex flex-col">
            <p class="text-2xl drop-shadow-xl font-normal text-blue-50 text-opacity-50 ">
              {Title}
            </p>
            <p class="text-lg font-medium">{descroption}</p>
          </div>
        </div>
        <div class="flex flex-row">
          <p class="text-5xl  self-center m-2">{BigData}</p>
          <div class="flex flex-col">
            <p class="text-2xl drop-shadow-xl font-normal text-blue-50 text-opacity-50 ">
              {Title}
            </p>
            <p class="text-lg font-medium">{descroption}</p>
          </div>
        </div>
      </div>
      <div class="text-center items-center self-center">
        <p>Extra Component</p>
      </div>
    </div>
  );
};

export default WindCard;
