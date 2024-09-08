import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <main className="bg-white border border-b-2 h-16 flex  items-center pl-4 pr-12 justify-between">
      <div className="flex flex-row ">
        <div className="h-8 w-8 bg-[#c4deea] rounded mr-4 flex justify-center items-center">
          <img src="/vectors/warning.svg" alt="" />
        </div>
        <span className="text-blue text-[15px] font-medium mr-4">
          Learn about your Earnings
        </span>
      </div>

      <Search />
      <div className="bg-ash w-10 h-10 flex items-center justify-center rounded-[50%]">
        <img src="/vectors/notification.svg" alt="" />
      </div>
    </main>
  );
};

export default Header;
