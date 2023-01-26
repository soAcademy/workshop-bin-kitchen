// import foodMenu from "../data/food-menu.json";

import { useState, useEffect } from "react";
import axios from "axios";

const FoodMenuList = () => {
  const [foodMenu, setFoodMenu] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
    }).then((response) => {
      console.log(response.data);
      setFoodMenu(response.data);
    });
  }, []);

  return foodMenu.map((food, key) => (
    <>
      {/* <h2 className="mb-4">รายการแนะนำ</h2> */}
      <div id={`food-${key}`} className="flex mb-4 gap-4">
        <img
          className="rounded-xl w-[72px] h-[72px] object-cover"
          src={food.image}
          alt={food.name}
        />
        <div className="flex flex-col">
          <div className="flex-auto">{food.name}</div>
          <div className="text-red-600">฿{food.price}</div>
        </div>
        {/* <div>{food.description}</div> */}
      </div>
    </>
  ));
};

export default FoodMenuList;
