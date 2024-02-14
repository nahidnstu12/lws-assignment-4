import React, { useEffect, useState } from "react";
import { convertDateFormat } from "../helpers/utility";
import useNewsQuery from "../hooks/useNewsQuery";
import thumb from "/src/assets/thumb.png";
import { useNews } from "../context/newsContext";

export default function News() {
  const { items, setActive } = useNews();
 

  useEffect(()=> {
    setActive({active: true})
  }, [])

  const leftPartNews = items?.length > 10 ? items?.slice(0, items?.length / 2) : items;
  const rightPartNews = items?.length < 10 ? [] : items?.slice(items?.length / 2, items?.length - 1);

  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        {/* left */}
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
          {/* news item */}
          {leftPartNews?.length > 0 &&
            leftPartNews?.map((item, index) => (
              <div
                className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8"
                key={index}
              >
                {/* info */}
                <div className="col-span-12 md:col-span-6">
                  <a href="">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                      {item.title}
                    </h3>
                  </a>
                  <p className="text-base text-[#292219]">{item.description}</p>
                  <p className="mt-5 text-base text-[#5C5955]">
                    {convertDateFormat(item.publishedAt)}
                  </p>
                </div>
                {/* thumb */}
                <div className="col-span-12 md:col-span-6">
                  <img
                    className="w-full"
                    src={item.urlToImage ?? thumb}
                    alt="thumb"
                  />
                </div>
              </div>
            ))}
        </div>
        {/* right */}
        <div className="col-span-12 self-start xl:col-span-4">
          <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
            {/* news item */}

            <div className="col-span-12 mb-6 md:col-span-8">
              <img className="w-full" src={thumb} alt="thumb" />
              {/* info */}
              {rightPartNews?.map((item, index) => (
                <div className="col-span-12 mt-6 md:col-span-4" key={index}>
                  <a href="#">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                      {item?.title}
                    </h3>
                  </a>
                  <p className="text-base text-[#292219]">
                    {item?.description}
                  </p>
                  <p className="mt-5 text-base text-[#94908C]">
                    {convertDateFormat(item?.publishedAt)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
