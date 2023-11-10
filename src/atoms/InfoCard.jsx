import React from "react";

const Card = ({
  Title = " ",
  BigData = " ",
  info = " ",
  description = "  ",
}) => {
  return (
    <div class="flex flex-col flex-wrap h-60 w-72 rounded-2xl bg-opacity-30 bg-gray-700 border-gray-400 shadow-md border-opacity-10 backdrop-blur-md text-white p-8 justify-between ">
      <p class="text-2xl capitalize drop-shadow-2xl text-blue-50 text-opacity-50 font-medium">
        {Title}
      </p>
      <p class="text-5xl">{BigData}</p>
      <p class="text-lg ">{description}</p>
      <p class="text-xs flex-wrap font-light">
        <italic>{info}</italic>
      </p>
    </div>
  );
};

export default Card;
