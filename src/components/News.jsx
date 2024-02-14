import React, { useEffect } from "react";
import { useNews } from "../context/newsContext";
import LeftNewsComponent from "./LeftNewsComponent";
import Loader from "./Loader";
import RightNewsComponent from "./RightNewsComponent";
import thumb from "/src/assets/thumb.png";

export default function News() {
  const { items, setActive, loading, error } = useNews();

  useEffect(() => {
    setActive({ active: true });
  }, []);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const leftPartNews =
    items?.length > 10 ? items?.slice(0, items?.length / 2) : items;
  const rightPartNews =
    items?.length < 10
      ? []
      : items?.slice(items?.length / 2, items?.length - 1);

  // console.log({ loading, error });

  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        {/* left */}
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
          {loading.state ? (
            <Loader message={loading?.message} />
          ) : leftPartNews?.length > 0 ? (
            leftPartNews?.map((item, index) => (
              <LeftNewsComponent item={item} key={index} />
            ))
          ) : (
            <div className="min-w-max text-4xl">No Data Found</div>
          )}
        </div>
        {/* right */}
        <div className="col-span-12 self-start xl:col-span-4">
          <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
            {/* news item */}

            <div className="col-span-12 mb-6 md:col-span-8">
              {loading?.state && (
                <img className="w-full" src={thumb} alt="thumb" />
              )}

              {loading.state ? (
                <div className="mt-5">
                  <Loader message={"loading?.message"} />
                </div>
              ) : (
                rightPartNews?.length > 0 &&
                rightPartNews?.map((item, index) => (
                  <RightNewsComponent item={item} key={index} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
