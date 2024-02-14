import React, { useState } from "react";
import useNewsQuery from "../hooks/useNewsQuery";
import { useNews } from "../context/newsContext";

const categories = [
  "General",
  "Business",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

export default function Categories() {
  const {setCategory, setSearch} = useNews();
  
  const handleClick = (val) => {
    setSearch("");
    setCategory(val.toLowerCase());
  };
  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        {categories.map((item) => (
          <li key={item} onClick={() => handleClick(item)}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
