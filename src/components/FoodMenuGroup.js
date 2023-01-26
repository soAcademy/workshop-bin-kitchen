import { useState, useEffect } from "react";
import axios from "axios";
import FoodMenuList from "./FoodMenuList";

const FoodMenuGroup = (props) => {
  const [foodMenu, setFoodMenu] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
    }).then((response) => {
      // console.log(response.data);
      setFoodMenu(response.data);
    });
  }, []);

  // const categoryList = [...new Set(foodMenu.category)];

  // console.log(categoryList);

  return [...new Set(foodMenu.map((food) => food.category))].map((category) => (
    <>
      <h2 className="mb-4">เมนู{category}</h2>
      <FoodMenuList menu={foodMenu} category={category} />
    </>
  ));
};

export default FoodMenuGroup;
