import React from "react";

export default function Loader({ message = "something went wrong" }) {
  return (
    <>
      <div className="flex relative">
        <div className="relative">
          <div className="w-20 h-20 rounded-full absolute border-4 border-dashed border-gray-200"></div>

          <div className="w-20 h-20  rounded-full animate-spin absolute border-4 border-dashed border-green-500 border-t-transparent"></div>
        </div>
      </div>
      <h3 className="text-4xl min-w-max ml-24 mt-4">{message}</h3>
    </>
  );
}
