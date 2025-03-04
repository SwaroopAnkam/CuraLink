import React from 'react';
import Card from "../../common/cards/card";
import { experts } from "../../../data/dummydata";

const repeatedexperts = [...experts, ...experts, ...experts];

export default function WhyUs() {
  return (
    <div className="w-[80%] outfit-400 select-none mx-auto">
      <div className="text text-[1.8vw] text-center w-[80%] mx-auto font-serif italic tracking-wide text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam odio officiis deleniti ea enim labore suscipit magnam quos pariatur eligendi.
      </div>
      <div className="cards flex flex-nowrap justify-center gap-[1vw] overflow-x-scroll my-[5vw] scrollbar-hide">
        {repeatedexperts.map((review, i) => {
          // Pass isEven to the Card so it handles its own background color.
          const isEven = i % 2 === 1;
          return <Card data={review} isEven={isEven} key={i} />;
        })}
      </div>
    </div>
  );
}
