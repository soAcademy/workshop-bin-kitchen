import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodMenuList from "./FoodMenuList";

const FoodMenuGroup = (props) => {
  const [foodMenu, setFoodMenu] = useState([]);

  useEffect(() => {
    axios({
      // method: "GET",
      // url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
      method: "POST",
      // url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-menus",
      url: `${process.env.REACT_APP_BASE_API_URL}/get-menus`,
    })
      .then((response) => {
        // console.log(response.data);
        setFoodMenu(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

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
          cartItems={props.cartItems}
          updateCartItems={props.updateCartItems}
        />
      </React.Fragment>
    )
  );
};

export default FoodMenuGroup;
