import React from "react";
import FoodMenuListComponent from "./FoodMenuListComponent";

const FoodMenuGroup = (props) => {
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
