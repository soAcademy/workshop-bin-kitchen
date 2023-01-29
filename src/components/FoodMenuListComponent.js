import React from "react";
import MenuListAddButton from "./FoodMenuListAddButton";
import FoodMenuItem from "./FoodMenuItem";

const FoodMenuList = ({ menus, category }) => {
  return (
    <>
      {/* START MENU BOX */}
      <div className="flex-col mt-3">
        <h1 className="text-md md:text-lg lg:text-xl xl:text-2xl">{`เมนู${category}`}</h1>
        <div className="md:grid grid-flow-row grid-cols-4 gap-4">
          {menus?.map((menu) => (
            <FoodMenuItem menu={menu}></FoodMenuItem>
          ))}
        </div>
      </div>
      {/* END MENU BOX */}
    </>
  );
};

export default FoodMenuList;
