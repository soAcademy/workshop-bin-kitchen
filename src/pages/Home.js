import React from "react";
import { datakitchenboeing } from "../datakitchen";

export const Home = () => {
  return (
    <>
      <div>
        <h1 className="text-xl text-center">{datakitchenboeing.name}</h1>
        <div>
          <img src={datakitchenboeing.url} />
        </div>
        <div>{datakitchenboeing.datadescription}</div>
      </div>
    </>
  );
};

export default Home;
