// import foodMenu from "../data/food-menu.json";

// import { useState, useEffect } from "react";
// import axios from "axios";

const FoodMenuList = (props) => {
  // const [foodMenu, setFoodMenu] = useState([]);

  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
  //   }).then((response) => {
  //     // console.log(response.data);
  //     setFoodMenu(response.data);
  //   });
  // }, []);
  const { menu, category, setFood } = props;

  return (
    <div className="mb-4 grid gap-4 md:grid-cols-2">
      {menu
        .filter((food) => food.category === category)
        .map((food) => (
          <div key={food.id} className="flex gap-4">
            <img
              className="h-[72px] w-[72px] rounded-[10px] object-cover"
              src={food.image}
              alt={food.name}
            />
            <div className="flex flex-auto flex-col">
              <div className="flex-auto">{food.name}</div>
              <div className="text-red-600">฿{food.price}</div>
            </div>
            <button
              onClick={() => setFood(food)}
              className="self-center rounded-[10px] bg-red-200 px-6 py-3 hover:bg-red-300"
            >
              เพิ่ม
            </button>
            {/* <div>{food.description}</div> */}
          </div>
        ))}
    </div>
  );
  // <div className="grid gap-4 md:grid-cols-2"></div>
};

export default FoodMenuList;
