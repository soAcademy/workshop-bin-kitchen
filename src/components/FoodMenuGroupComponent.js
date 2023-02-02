import React from "react";
import FoodMenuList from "../components/FoodMenuListComponent";

const FoodMenuGroup = ({
  menus,
  categories,
  onBypassAddButtonClickedToMainPage,
  setOpenPop,
}) => {
  // console.log("menus",menus,"categories",categories);
  console.log("setOpenPop : " , setOpenPop);
  return (
    <div>
      {categories?.map((category) => (
        <FoodMenuList
          setOpenPop={setOpenPop}
          onBypassAddButtonClicked={(menuObj) => {
            console.log("menu group" + JSON.stringify(menuObj));
            onBypassAddButtonClickedToMainPage(menuObj);
          }}
          menus={menus?.filter((menu) => menu.category === category)}
          category={category}
        />
      ))}
    </div>
  );
};

export default FoodMenuGroup;
