import React from "react";

const Hamburger = () => {
  return (
    <>
      <div className="bg-rose-100 px-8 py-2 flex flex-col gap-3">
        <div>
          <button>เมนูอาหาร</button>
        </div>
        <div>
          <button>รายการสั่งอาหาร</button>
        </div>
        <div>
          <button>สถิติ</button>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
