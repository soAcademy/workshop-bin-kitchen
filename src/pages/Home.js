import React from "react";
import { datakitchenboeing } from "../datakitchen";
import FoodMenuListComponent from "../components/FoodMenuListComponent";
import { mockData } from "../foodMenu";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-xl text-center my-3">{datakitchenboeing.name}</h1>
        <div className="w-[250px] h-[250px]">
          <img
            className="w-[100%] h-[100%] object-cover"
            src={datakitchenboeing.url}
          />
        </div>
        <div className="mx-7 my-3">{datakitchenboeing.datadescription}</div>
      </div>
      <FoodMenuListComponent foodMenus={mockData} />
    </>
  );
};

export default Home;
