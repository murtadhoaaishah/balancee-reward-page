import React, { useState } from "react";

const Aside = () => {
  const [isActive, setIsActive] = useState(false);

  const menu = [
    { icon: "/vectors/dashboard.svg", title: "Dashboard" },
    { icon: "", title: "Book a Repair" },
    { icon: "/vectors/repairs.svg", title: "Appointments" },
    { icon: "/public", title: "Reward system" },
    { icon: "/vectors/vehicles.svg", title: "My Vehicles" },
    { icon: "/vectors/history.svg", title: "Repair history" },
    { icon: "/vectors/repairStation.svg", title: "Repair Stations" },
    { icon: "", title: "Newsletter" },
    { icon: "", title: "Support" },
    { icon: "", title: "Log Out" },
  ];
  return (
    <main className="items-center w-[18rem] py-6 px-12 border border-r-2 bg-white">
      <header className=" flex flex-col items-center mb-16">
        <svg className="h-full w-full">
          <use href="/sprites.svg#balancee-text-logo"></use>
        </svg>
        <span className="bg-[#c3175b] h-12 w-12 text-white mb-4 text-3xl flex justify-center items-center">
          M
        </span>
        <span className="font-medium mb-4">Murtadho Aishat</span>
        <span className="text-grey text-sm">View profile</span>
      </header>
      <section className="">
        <span className="font-medium text-grey">MENU</span>
        <div className="space-y-[5px] mt-4">
          {menu.map((option, index) => (
            <div
              className={`flex flex-row  hover:bg-lightblue w-[12.4rem] h-[3.25rem] px-4 py-[12px] items-center rounded-lg${
                isActive ? "bg-lightblue" : ""
              }`}
            >
              <img src={option.icon} className="color-blue h-4 w-4 mr-4" />
              <span className="font-semibold text-[15px]">{option.title}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Aside;
