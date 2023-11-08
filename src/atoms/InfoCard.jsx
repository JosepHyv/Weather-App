import React from "react";

const Card = ({
  Title = " ",
  BigData = " ",
  info = " ",
  description = "  ",
}) => {
  return (
    <div class="flex flex-col flex-wrap h-60 w-60 rounded-2xl justify-start bg-opacity-30 bg-gray-700 border-gray-400 shadow-md border-opacity-10 backdrop-blur-md text-white px-10 py-5">
      <p class="border text-2xl capitalize drop-shadow-2xl text-blue-50 text-opacity-50 font-medium">
        {Title}
      </p>
      <p class="text-5xl">{BigData}</p>
      <p class="text-lg ">{description}</p>
      <p class="text-xs font-light">
        <italic>{info}</italic>
      </p>
    </div>
  );
};

export default Card;
