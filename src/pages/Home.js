import React, { useState, useEffect } from "react";
import { datakitchenboeing } from "../datakitchen";
import FoodMenuListComponent from "../components/FoodMenuListComponent";
import { mockData } from "../foodMenu";
import FoodMenuGroup from "../components/FoodMenuGroup";
import axios from "axios";
import Nav from "../components/Nav";

export const Home = () => {
  const [foodMenu, setFoodMenu] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
    }).then((response) => {
      console.log(response.data);
      setFoodMenu(response.data);
    });
  }, [foodMenu]);
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center">
        <h1 className="text-xl text-center my-3">{datakitchenboeing.name}</h1>
        <div className="w-full ">
          <img
            className="w-[100%] px-8 object-cover"
            src={datakitchenboeing.url}
          />
        </div>
        <div className="mx-7 my-3">{datakitchenboeing.datadescription}</div>
      </div>
      {/* <FoodMenuListComponent foodMenus={foodMenu} category="รายการคำแนะนำ" /> */}
      <FoodMenuGroup
        foodMenu={foodMenu}
        categories={[...new Set(foodMenu?.map((r) => r.category))]}
      />
    </>
  );
};

export default Home;
