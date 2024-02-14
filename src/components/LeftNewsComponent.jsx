import React from "react";
import { convertDateFormat } from "../helpers/utility";
import thumb from "/src/assets/thumb.png";
import thumb_lg from "/src/assets/thumb_lg.png";

export default function LeftNewsComponent({ item, index }) {
  const infoClasses = [
    "mb-2.5 text-xl font-bold",
    index === 0 ? "lg:text-2xl" : null,
  ];

  const renderThumbnail = () => {
    if (index === 0) {
      return (
        <div className="col-span-12 lg:col-span-8">
          <img className={"w-full"} src={thumb_lg} alt="thumb" />
          <p className="mt-5 text-base text-[#5C5955]">
            Illustration: Karolis Strautniekas
          </p>
        </div>
      );
    } else if (index === 1) {
      return (
        <div className="col-span-12 md:col-span-6">
          <img className={"w-full"} src={thumb} alt="thumb" />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div
      className={`${
        index === 0
          ? " grid grid-cols-12 gap-4"
          : index === 1
          ? " grid grid-cols-12 gap-4 lg:col-span-8"
          : " md:col-span-6 lg:col-span-4"
      } col-span-12`}
    >
      <div
        className={`${
          index === 0
            ? "lg:col-span-4"
            : index === 1
            ? " md:col-span-6"
            : " md:col-span-4"
        } col-span-12 `}
      >
        <a href="">
          <h3 className={infoClasses.join(" ")}>{item.title}</h3>
        </a>
        <p className={"text-base text-[#292219]"}>{item.description}</p>
        <p className={"mt-5 text-base text-[#5C5955]"}>
          {convertDateFormat(item.publishedAt)}
        </p>
      </div>
      {renderThumbnail()}
    </div>
  );
}
