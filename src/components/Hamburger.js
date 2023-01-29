import React from "react";

const Hamburger = () => {
  return (
    <>
      <div className="bg-rose-100 px-8 py-4 flex flex-col gap-3 md:py-6 md:gap-6 md:py-9">
        <div className="text-lg md:text-3xl">
          <button>เมนูอาหาร</button>
        </div>
        <div className="text-lg md:text-3xl">
          <button>รายการสั่งอาหาร</button>
        </div>
        <div className="text-lg md:text-3xl">
          <button>สถิติ</button>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
