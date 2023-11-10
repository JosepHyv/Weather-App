import React from "react";

const UvCard = ({
  Title = "Title Example",
  BigData = "28",
  info = "This is an info example",
  desc = "Example",
}) => {
  return (
    <div class="flex flex-col rounded-2xl h-52 justify-around bg-opacity-30 bg-gray-700 border-gray-400 shadow-md border-opacity-10 backdrop-blur-md text-white px-10 py-5">
      <p class="text-2xl mb-2 drop-shadow-2xl text-blue-50 text-opacity-50 font-medium">
        {Title}
      </p>
      <p class="text-5xl">{BigData}</p>
      <p class="text-lg">{desc}</p>
      <p class="text-xs font-light">
        <italic>{info}</italic>
      </p>
    </div>
  );
};

export default UvCard;
