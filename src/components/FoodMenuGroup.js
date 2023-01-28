import React from "react";
import FoodMenuListComponent from "./FoodMenuListComponent";

const FoodMenuGroup = (props) => {
  console.log("props", props);
  console.count("render");
  const { categories, foodMenu, addFoodOrder } = props;
  return (
    <div>
      {categories?.map((category) => (
        <FoodMenuListComponent
          addFoodOrder={addFoodOrder}
          key={category}
          foodMenus={foodMenu.filter((menu) => menu.category === category)}
          category={category}
        />
      ))}
    </div>
  );
};

export default FoodMenuGroup;
