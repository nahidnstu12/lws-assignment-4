import React from "react";
import { convertDateFormat } from "../helpers/utility";
import thumb from "/src/assets/thumb.png";
import thumb_lg from "/src/assets/thumb_lg.png";

export default function LeftNewsComponent({ item, index }) {
  return (
    <div
      className={`${
        index == 0
          ? "col-span-12 grid grid-cols-12 gap-4"
          : index == 1
          ? "col-span-12 grid grid-cols-12 gap-4 lg:col-span-8"
          : "col-span-12 md:col-span-6 lg:col-span-4"
      }`}
    >
      {/* info */}
      <div
        className={`${
          index == 0
            ? "col-span-12 lg:col-span-4"
            : index == 1
            ? "col-span-12 md:col-span-6"
            : "col-span-12 md:col-span-4"
        }`}
      >
        <a href="">
          <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">{item.title}</h3>
        </a>
        <p className="text-base text-[#292219]">{item.description}</p>
        <p className="mt-5 text-base text-[#5C5955]">
          {convertDateFormat(item.publishedAt)}
        </p>
      </div>
      {/* thumb */}
      {index == 0 ? (
        <div className="col-span-12 lg:col-span-8">
          <img className="w-full" src={thumb_lg} alt="thumb" />
          <p class="mt-5 text-base text-[#5C5955]">
            Illustration: Karolis Strautniekas
          </p>
        </div>
      ) : index == 1 ? (
        <div className="col-span-12 md:col-span-6">
          <img className="w-full" src={thumb} alt="thumb" />
        </div>
      ) : null}
      {/* */}
    </div>
  );
}
