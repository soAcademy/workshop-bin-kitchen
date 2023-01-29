import React from "react";
import MenuListAddButton from "./FoodMenuListAddButton";

const FoodMenuItem = ({ menu }) => {
  return (
    <div className="flex p-3 bg-gray-200 mt-3 rounded-lg md:flex-col">
      {/* START IMAGE */}
      <div className="w-1/3 md:w-auto md:h-1/2">
        <img
          className="w-[100%] md:h-[100%] rounded-xl"
          src={menu.image}
          alt="menu image"
        />
      </div>
      {/* END IMAGE */}
      {/*START NAME AND price */}
      <div className="md:flex-col pl-2 w-3/6 md:w-auto">
        <div className="text-md md:text-md md:h-1/2">
          <h1 className="">{menu.name}</h1>
        </div>

        <div className="text-md md:text-md md:h-1/2 text-red-500">
          <p>{menu.price} ฿</p>
        </div>
      </div>
      {/* END NAME AND price */}
      {/* START BUTTON */}
      <div className="w-1/6 md:w-auto md:flex-col items-center my-auto md:pb-0 text-md md:text-lg lg:text-xl xl:text-2xl">
        <MenuListAddButton>ADD</MenuListAddButton>
      </div>
      {/* END BUTTON */}
    </div>
  );
};

export default FoodMenuItem;
