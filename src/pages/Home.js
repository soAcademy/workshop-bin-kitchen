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
  const [orders, setOrders] = useState([]);
  const [onSubmitMenu, setOnSubmitMenu] = useState();
  const [tableId, setTableId] = useState();
  // setState คือการลบค่าเดิม และแทนที่ค่าใหม่ เมื่อมีการเรียกใช้งาน setState()

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

  useEffect(() => {
    const data = {
      table_id: tableId,
      items: orders.map((order) => ({
        menu_id: order.id,
        price: order.price,
        quantity: order.quantity,
        total_price: order.price * order.quantity,
      })),
    };
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/create-order",
      data: data,
    })
      .then((response) => {
        console.log(response.data);
        setOnSubmitMenu(response.data);
      })
      .catch((error) => console.log(error));
  }, [onSubmitMenu]);

  const handleHamburgerToggle = () => {
    setIsHamburgerOn(!isHamburgerOn);
    // ทำให้ setIsHamburger เป็น toggle
  };

  const handleHamburgerOff = () => {
    setIsHamburgerOn(false);
  };

  const handleFoodOrderOn = (food) => {
    // console.log(food);
    food.amount = 1;
    //เพิ่มจำนวนของอาหารชนิดนั้น ทุกครั้งที่กดเพิ่ม ก็จะได้เมนูนั้นมา 1 อัน
    const isExists = orders.some(
      (order) => order.id === food.id || order.name === food.name
      // food.name คือสิ่งที่เรากดเข้ามา
      //ถ้าตรงตามเงื่อนไขนี้ก็ไม่ต้องไป setState ใหม่
    );
    if (!isExists) setOrders([...orders, food]);
    setFoodOrderOn(true);
  };

  const handlePlusQuantity = (id) => {
    // setQuantity(quantity + 1);
    // const founded = orders.find((order) => order.id === id);
    // founded.amount += 1;
    // const clearSelf = orders.filter((order) => order.id !== id);
    // setOrders([founded, ...clearSelf]);
    const index = orders.findIndex((order) => order.id === id);
    const temp = [...orders];
    temp[index].amount += 1;
    setOrders(temp);
    // ตำแหน่งของ index มันไม่ขยับ
  };
  const handleMinusQuantity = (id) => {
    // if (quantity <= 0) {
    //   setQuantity(0);
    // } else {
    //   setQuantity(quantity - 1);
    // }
    // if(quantity!==0) setQuantity(quantity - 1);
    // if (quantity) setQuantity(quantity - 1);
    //it's about truthy falsy
    const index = orders.findIndex((order) => order.id === id);
    const temp = [...orders];
    temp[index].amount -= 1;
    if (temp[index].amount === 0) {
      const clearSelf = temp.filter((item) => item.id !== id);
      // id ตัวท้ายมาจากการที่เรากดปุ่ม +,-
      // item.id ตัวที่เรากดเพิ่ม
      // console.log("temp:", temp);
      // console.log("clearself:", clearSelf);
      return setOrders(clearSelf);
      // *reduce.
    }
    setOrders(temp);
  };
  const handleFoodOrderOff = () => {
    setFoodOrderOn(false);
  };
  // console.log("order", orders);
  // console.log("foodmenu", foodMenu);
  return (
    <>
      <Nav hamOn={handleHamburgerToggle} isHamburgerOn={isHamburgerOn} />
      {isHamburgerOn && <Overlay handleClick={handleHamburgerOff} />}
      {FoodOrderOn && (
        <FoodOrder
          orders={orders}
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
