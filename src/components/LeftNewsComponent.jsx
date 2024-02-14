import React from "react";
import { convertDateFormat } from "../helpers/utility";
import thumb from "/src/assets/thumb.png";

export default function LeftNewsComponent({ item }) {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
      {/* info */}
      <div className="col-span-12 md:col-span-6">
        <a href="">
          <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">{item.title}</h3>
        </a>
        <p className="text-base text-[#292219]">{item.description}</p>
        <p className="mt-5 text-base text-[#5C5955]">
          {convertDateFormat(item.publishedAt)}
        </p>
      </div>
      {/* thumb */}
      <div className="col-span-12 md:col-span-6">
        <img className="w-full" src={item.urlToImage ?? thumb} alt="thumb" />
      </div>
    </div>
  );
}
