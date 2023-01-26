import React from "react";
import FoodMenuListComponent from "./FoodMenuListComponent";

const FoodMenuGroup = (props) => {
  const { categories, foodMenu } = props;
  console.log("prop", props);
  return (
    <div>
      {categories?.map((category) => (
        <FoodMenuListComponent
          foodMenus={foodMenu.filter((menu) => menu.category === category)}
          category={category}
        />
      ))}
    </div>
  );
};

export default FoodMenuGroup;
