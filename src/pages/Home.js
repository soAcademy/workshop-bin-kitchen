// import FoodMenuList from "../Components/FoodMenuList";
import FoodMenuGroup from "../Components/FoodMenuGroup";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [foodMenus, setFoodMenus] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
    }).then((res) => {
      console.log(res.data);
      setFoodMenus(res.data);
    });
  }, []);

  return (
    <>
      <div className="mb-4">
        <h1 className="text-3xl mx-4 mb-4 pt-24">ร้านอาหารครัวคุณบอร์น</h1>
        <div className="mx-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </div>
        <div className="mt-4">
          <img
            src="pichome.jpeg"
            className="object-contain rounded-xl mx-auto w-3/4"
          />
        </div>

        {/* <FoodMenuList props={foodMenu} /> */}
        <FoodMenuGroup
          foodMenus={foodMenus}
          categories={[...new Set(foodMenus?.map((r) => r.category))]}
        />
      </div>
    </>
  );
};
