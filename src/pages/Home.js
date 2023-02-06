import Banner from "../assets/banner.jpg";
import MenuList from "../components/MenuList";
import FoodMenuGroup from "../components/FoodMenuGroup";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import CartPopup from "../components/CartPopup";

const description = {
  name: "Omakase",
  introduction:
    "Omakase is a traditional Japanese dining style in which the chef provides a meal tailored to your preferences based on availability, budget, taste, and seasonality. A comparable concept in Western cuisine would be the “tasting menu,” but omakase is so much more than that. It’s a very intimate experience and very human experience that is best thought of as a verbal and non-verbal dialogue between you and the chef.",
};

const updateCart = ({ sign, cart, id, name, price }) => {
  if (cart.some((item) => item.id === id)) {
    // acc ตามที่เรากำหนดจาก intitial และสะสมจาก c เรื่อยๆ
    // c ค่าที่ button ส่งมาทีละรายการ
    return cart.reduce((acc, c) => {
      if (c.id === id) {
        acc.push({
          id,
          quantity: sign + c.quantity,
          name,
          price,
          totalPrice: (sign + c.quantity) * price,
        });
      } else {
        acc.push(c);
      }
      return acc;
    }, []);
  } else {
    return [
      ...cart,
      {
        id,
        quantity: 1,
        name,
        price,
        totalPrice: price,
      },
    ];
  }
};

const Home = () => {
  const [menus, setMenus] = useState([]);
  const [cart, setCart] = useState([]);
  const [toggleCartPopup, setToggleCartPopup] = useState(false);

  useEffect(() => {
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-menus",
    }).then((res) => {
      console.log(res.data);
      setMenus(res.data);
    });
  }, []);
  console.log("menusis", menus);
  // console.log("FoodMenuGroup", menus, [
  //   ...new Set(menus?.map((r) => r.category))
  // ]);
  return (
    <div>
      <div className="pt-10 px-4">
        <h1 className="text-3xl underline text-center">{description.name}</h1>
        <p className="mt-2">{description.introduction}</p>
        <img
          src={Banner}
          className="w-full mt-4 rounded-lg sm:pt-8 md:pt-16 lg:pt-32 xl:pt-48 "
        />

        {/* {foodMenus.map((menu) => (
      <MenuList enu={menu} />
    ))} */}
        {/* <MenuList foodMenus={menus} category="รายการแนะนำ" className="shadow" /> */}

        <FoodMenuGroup
          setToggleCartPopup={setToggleCartPopup}
          foodMenus={menus}
          categories={[...new Set(menus?.map((r) => r.category))]}
          cart={cart}
          setCart={setCart}
          updateCart={updateCart}
        />
      </div>
      <div>
        <CartPopup
          cart={cart}
          setCart={setCart}
          updateCart={updateCart}
          toggleCartPopup={toggleCartPopup}
          setToggleCartPopup={setToggleCartPopup}
        />
      </div>
    </div>
  );
};

export default Home;
