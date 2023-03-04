import React from "react";
import FoodMenuList from "../components/FoodMenuListComponent";

const FoodMenuGroup = ({
  foodMenus,
  categories,
  onBypassAddButtonClickedToMainPage,
  setOpenPop,
  orders,
  setOrders,
}) => {
  // console.log("menus",menus,"categories",categories);
  console.log("setOpenPop : " , setOpenPop);
  return (
    <div>
      {categories?.map((category) => (
        <FoodMenuList
          setOpenPop={setOpenPop}
          orders={orders}
          setOrders={setOrders}
          onBypassAddButtonClicked={(menuObj) => {
            console.log("menu group" + JSON.stringify(menuObj));
            onBypassAddButtonClickedToMainPage(menuObj);
          }}
          foodMenus={foodMenus?.filter((menu) => menu.categoryName === category)}
          category={category}
        />
      ))}
    </div>
  );
};

export default FoodMenuGroup;
