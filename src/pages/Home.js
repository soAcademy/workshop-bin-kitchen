import React, { useState, useEffect } from "react";
import { datakitchenboeing } from "../datakitchen";
import FoodMenuGroup from "../components/FoodMenuGroup";
import axios from "axios";
import Nav from "../components/Nav";
import Overlay from "../components/Overlay";
import FoodOrder from "../components/FoodOrder";

export const Home = () => {
  const [foodMenu, setFoodMenu] = useState([]);
  const [isHamburgerOn, setIsHamburgerOn] = useState(false);
  const [FoodOrderOn, setFoodOrderOn] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
    })
      .then((response) => {
        console.log(response.data);
        setFoodMenu(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleHamburgerToggle = () => {
    setIsHamburgerOn(!isHamburgerOn);
    // ทำให้ setIsHamburger เป็น toggle
  };

  const handleHamburgerOff = () => {
    setIsHamburgerOn(false);
  };

  const handleFoodOrderOn = () => {
    setFoodOrderOn(true);
  };

  const handleFoodOrderOff = () => {
    setFoodOrderOn(false);
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleMinusQuantity = () => {
    // if (quantity <= 0) {
    //   setQuantity(0);
    // } else {
    //   setQuantity(quantity - 1);
    // }
    // if(quantity!==0) setQuantity(quantity - 1);
    if (quantity) setQuantity(quantity - 1);
    //it's about truthy falsy
  };

  return (
    <>
      <Nav hamOn={handleHamburgerToggle} isHamburgerOn={isHamburgerOn} />
      {isHamburgerOn && <Overlay handleClick={handleHamburgerOff} />}
      {FoodOrderOn && (
        <FoodOrder
          quantity={quantity}
          handlePlusQuantity={handlePlusQuantity}
          handleMinusQuantity={handleMinusQuantity}
          handleCloseFoodOrder={handleFoodOrderOff}
        />
      )}
      {FoodOrderOn && <Overlay handleClick={handleFoodOrderOff} />}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-gray-900 bg-gray-200 px-7 py-3 rounded-md border-4 border-rose-200 text-center my-3 md:text-6xl md:my-10 shadow-lg">
          {datakitchenboeing.name}
        </h1>
        <div className="w-full ">
          <img
            className="w-[100%] px-8 object-cover "
            src={datakitchenboeing.url}
          />
        </div>
        <div className="mx-7 my-3 text-rose-500 md:text-3xl">
          {datakitchenboeing.datadescription}
        </div>
      </div>
      {/* <FoodMenuListComponent foodMenus={foodMenu} category="รายการคำแนะนำ" /> */}
      <FoodMenuGroup
        addFoodOrder={handleFoodOrderOn}
        foodMenu={foodMenu}
        categories={[...new Set(foodMenu?.map((r) => r.category))]}
        // foodMenu?.map = หยิบมาแค่ category
        //new set(unique) จัดรวมเซ็ทแบบไม่ซ้ำตัว
        //... = แกะ {} ของ output ของ new set ออกมา จากนั้นครอบด้วย []
      />
    </>
  );
};

export default Home;
