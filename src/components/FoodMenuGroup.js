import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodMenuList from "./FoodMenuList";

const FoodMenuGroup = (props) => {
  const [foodMenu, setFoodMenu] = useState([]);
  // const { food, setFood } = props;

  useEffect(() => {
    axios({
      // method: "GET",
      // url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
      method: "POST",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-menus",
    }).then((response) => {
      // console.log(response.data);
      setFoodMenu(response.data);
    });
  }, []);

  // const categoryList = [...new Set(foodMenu.category)];

  // console.log(categoryList);

  return [...new Set(foodMenu.map((food) => food.category))].map(
    (category, idx) => (
      <React.Fragment key={idx}>
        <h2 className="mb-4">เมนู{category}</h2>
        <FoodMenuList
          menu={foodMenu}
          category={category}
          food={props.food}
          setFood={props.setFood}
          isOrderModalOpen={props.isOrderModalOpen}
          toggleOrderModal={props.toggleOrderModal}
        />
      </React.Fragment>
    )
  );
};

export default FoodMenuGroup;
