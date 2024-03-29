import React from "react";
import { convertDateFormat } from "../helpers/utility";
import thumb from "/src/assets/thumb.png";

export default function RightNewsComponent({ item, index }) {
  return (
    <div className={`col-span-12 md:col-span-8 ${index == 0 ? "mb-6" : ""}`}>
      {index == 0 && <img className="w-full" src={thumb} alt="thumb" />}
      <div className={`col-span-12 md:col-span-4 ${index == 0 ? "mt-6" : "mt-2"}`}>
        <a href="#">
          <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">{item?.title}</h3>
        </a>
        <p className="text-base text-[#292219]">{item?.description}</p>
        <p className="mt-5 text-base text-[#94908C]">
          {" "}
          {convertDateFormat(item?.publishedAt)}
        </p>
      </div>
    </div>
  );
}
