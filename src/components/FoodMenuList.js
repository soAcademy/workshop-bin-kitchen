import React, { useState } from "react";
const FoodMenuList = (props) => {
  const { cart, setCart, toggleCartPopup, setToggleCartPopup } = props;
  return (
    <div>
      <h1 className="font-bold p-2 lg:text-4xl text-2xl text-center text-yellow-300 w-[100px] rounded-lg m-2">
        {props.category}
        {/* from FoodMenuGroup line 7 */}
      </h1>

      <div className="sm:grid sm:grid-cols-2 sm:gap-2">
        {props?.foodMenus?.map(
          (
            r //foodMenus props from Home.js line 36?
          ) => (
            <div className="flex">
              <img
                src={r.image}
                className="lg:h-[150px] lg:w-[200px] w-20 h-20  object-cover rounded-lg mb-4 m-2"
              ></img>
              <div className="flex-auto">
                <div className="lg:text-2xl text-lg m-2 text-neutral-50">
                  {r.name}
                </div>
                <div className="lg:text-xl text-base m-2 lg:mt-6 mt-3 text-neutral-50">
                  {r.price}
                </div>
              </div>
              <div>
                <button
                  className="lg:text-xl text-base button bg-red-200 active:bg-red-400 px-6 py-2 rounded-lg mr-4 mt-6"
                  onClick={() => {
                    setToggleCartPopup(true);
                  }}
                >
                  เพิ่ม
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FoodMenuList;
