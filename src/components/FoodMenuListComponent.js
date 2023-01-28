import React from "react";
import MenuListAddButton from "./FoodMenuListAddButton";
import FoodMenuItem from "./FoodMenuItem";

const FoodMenuList = ({ menus, category }) => {
  return (
    <>
      {/* START MENU BOX */}
      <div className="mt-3">
        <h1 className="text-md md:text-lg lg:text-xl xl:text-2xl">{`เมนู${category}`}</h1>
        {menus?.map((menu) => (
          <FoodMenuItem menu={menu}></FoodMenuItem>
        ))}
      </div>
      {/* END MENU BOX */}
    </>
  );
};

export default FoodMenuList;
