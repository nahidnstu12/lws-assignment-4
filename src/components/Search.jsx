import React, { useCallback, useRef } from "react";
import { useNews } from "../context/newsContext";
import { debounce } from "../helpers/utility";

export default function Search() {
  const { setSearch } = useNews();
  const inputRef = useRef();

  const handleSearch = () => {
    setSearch(inputRef.current.value);
  };

  const debouncedSearch = useCallback(debounce(handleSearch, 500), [
    handleSearch,
  ]);

  return (
    <div className="flex items-center space-x-3 lg:space-x-8">
      <form>
        <div className="flex">
          <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
            <input
              type="search"
              id="search"
              className="z-20 block w-full bg-gray-200 px-4 py-2 pr-10 focus:outline-none text-black"
              placeholder="Search Task"
              ref={inputRef}
              onChange={debouncedSearch}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
