import React from "react";
import FoodMenuList from "../components/FoodMenuListComponent";

const FoodMenuGroup = ({
  menus,
  categories,
  onBypassAddButtonClickedToMainPage,
}) => {
  // console.log("menus",menus,"categories",categories);
  return (
    <div>
      {categories?.map((category) => (
        <FoodMenuList
          onBypassAddButtonClicked={(e) => {
            console.log("menu group" + JSON.stringify(e));
            onBypassAddButtonClickedToMainPage(e);
          }}
          menus={menus?.filter((menu) => menu.category === category)}
          category={category}
        />
      ))}
    </div>
  );
};

export default FoodMenuGroup;
