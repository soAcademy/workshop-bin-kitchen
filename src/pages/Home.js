import FoodMenuGroup from "../Components/FoodMenuGroup";
import CartPopup from "../Components/CartPopup";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [foodMenus, setFoodMenus] = useState([]);
  const [cart, setCart] = useState([]);
  const [toggleCartPopup, setToggleCartPopup] = useState(false);
  const [tableId, setTableId] = useState();

  console.log("foodMenus", foodMenus);
  console.log("cart", cart);
  console.log("tableId", tableId);

  useEffect(() => {
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-menus",
    }).then((res) => {
      console.log(res.data);
      setFoodMenus(res.data);
    });
  }, []);

  const cartAdjustData = {
    table_id: tableId,
    items: cart.map((r) => {
      return {
        menu_id: r.id,
        price: r.price,
        quantity: r.qty,
        total_price: r.price * r.qty,
      };
    }),
  };

  console.log("cartAdjustData", cartAdjustData);

  const pushOrder = () => {
    // var axios = require("axios");
    const data = JSON.stringify(cartAdjustData);
    console.log("cartAdjustData2", data);

    // [
    //   {
    //     menu_id: 1,
    //     price: 150,
    //     quantity: 2,
    //     total_price: 300,
    //   },
    //   {
    //     menu_id: 5,
    //     price: 200,
    //     quantity: 1,
    //     total_price: 200,
    //   },
    // ],

    const config = {
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/create-order",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("apiCreateOrderResp", JSON.stringify(response.data));
        setCart([]);
        setTableId();
      })
      .catch(function (error) {
        console.log("apiCreateOrderErrorResp", error);
      });
  };

  return (
    <>
      <CartPopup
        foodMenus={foodMenus}
        cart={cart}
        setCart={setCart}
        toggleCartPopup={toggleCartPopup}
        setToggleCartPopup={setToggleCartPopup}
        tableId={tableId}
        setTableId={setTableId}
        pushOrder={pushOrder}
      />

      <div className="mb-4">
        <h1 className="text-3xl mx-4 mb-4 pt-24">BIN'S KITCHEN</h1>
        <div className="mx-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </div>
        <div className="mt-4">
          <img
            src="pichome.jpeg"
            className="object-contain rounded-xl mx-auto w-10/12"
          />
        </div>

        {/* <FoodMenuList props={foodMenu} /> */}

        <div className="z-10">
          <FoodMenuGroup
            cart={cart}
            setCart={setCart}
            foodMenus={foodMenus}
            categories={[...new Set(foodMenus?.map((r) => r.category))]}
            toggleCartPopup={toggleCartPopup}
            setToggleCartPopup={setToggleCartPopup}
          />
        </div>
      </div>
    </>
  );
};
