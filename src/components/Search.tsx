import React from "react";

const Search = () => {
  return (
    <main className="flex flex-row items-center justify-between w-[21rem] h-[2.7rem] border px-4 rounded-md">
      <div className="flex flex-row items-center">
        <img src="/vectors/search.svg" alt="search" className="pr-[0.25rem]" />
        <span className="text-sm text-[#bfbfbf]">Search</span>
      </div>
      <img src="/vectors/close.svg" alt="close" />
    </main>
  );
};

export default Search;
