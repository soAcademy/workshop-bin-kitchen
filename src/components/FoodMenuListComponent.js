import React from "react";
import FoodMenuItem from "./FoodMenuItem";

const FoodMenuList = ({ menus, category, onBypassAddButtonClicked }) => {
  return (
    <>
      {/* START MENU BOX */}
      <div className="flex-col mt-3">
        <h1 className="text-md md:text-lg lg:text-xl xl:text-2xl">{`เมนู${category}`}</h1>
        <div className="md:grid grid-flow-row grid-cols-3 gap-4 xl:grid-cols-4 xl:gab-2">
          {menus?.map((menu) => (
            <FoodMenuItem
              onAddButtonClicked={(e) => {
                console.log("menu list" + JSON.stringify(e));
                onBypassAddButtonClicked(e);
              }}
              menu={menu}
            ></FoodMenuItem>
          ))}
        </div>
      </div>
      {/* END MENU BOX */}
    </>
  );
};

export default FoodMenuList;
