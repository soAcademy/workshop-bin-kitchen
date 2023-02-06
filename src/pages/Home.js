import Nav from "../component/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import FoodMenuGroup from "../component/FoodMenuGroup";
import CartPopUp from "../component/CartPopUp";

const data = {
  title: "Heaven Kitchen Shop",
  content_title:
    "พูดถึง “อาหาร” เชื่อว่าทุกคนต้องสนใจ จะกินมาก กินน้อย คนเราก็ต้องกิน แต่เชื่อเหลือเกินว่าคนอีกไม่น้อยคงเบื่อกับอาหารที่จำเจ กินอยู่ทุกวันและอยากลองกินอาหารที่แปลกใหม่ แบบไม่เคยเจอเพื่อเติมเต็มรสชาติให้ชีวิตได้มีสีสันมากขึ้น",
};

export const Home = () => {
  const [menu, setMenu] = useState();
  const [group, setGroup] = useState();
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    console.log("useEffect cart",cart);
  },[cart])

  useEffect(() => {
    const a = axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-menus",
    }).then((res) => {
      setMenu(res.data);
      console.log("Raw data", res);
      console.log("All data", res.data);
      console.log(
        "catgory",
        res.data?.map((r) => r.category)
      );
      setGroup([...new Set(res.data?.map((r) => r.category))]);
      console.log("unique ", [...new Set(res.data?.map((r) => r.category))]); // unique menu
    });
  }, []);

  const Confirm = (cart) => {
    console.log("bbb", cart);
    const confirmData = cart.map((r) => ({
      table_id: 5,
      menu_id: r.id,
      price: r.price,
      quantity: r.quantity,
      total_price: r.price * r.quantity,
    }));
    console.log(confirmData);
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/create-order",
      data: confirmData,
    }).then((response) => {
      console.log("response:", response.data);
    });
  };

  const updateCart = (newCart) => {
    console.log("OldCart", cart);
    const updateCart = [...cart, ...newCart];
    console.log("After nested", updateCart);
    setCart(updateCart);
    Confirm(cart);
  };

  const addCart = (inputCart) => {
    console.log("inputCart", inputCart);
    const _cart = inputCart;
    const newCart = _cart.map((r) => r.quantity ?? { quantity: 1, ...r });
    setCart(newCart);
    // console.log("addCart", cart);
    console.log("newCart :", newCart);
    updateCart(newCart);
  };

  return (
    <>
      <div className=" flex flex-col  bg-slate-100 ">
        {console.log("cart", cart)}
        {console.log("menu",menu)}
      

        <div className="">
          <Nav />
        </div>
        <div className="mt-14">
          <div className="text-center text-xl font-bold">{data.title}</div>
          <div className="p-2 pl-4">{data.content_title}</div>
          <div className="p-4 grid justify-items-center  w-full">
            <img className="rounded-lg md:h-[400px] " src="chicken.jpg"></img>
          </div>
        </div>
        <div className="grid justify-items-center ">
          <FoodMenuGroup
            menu={menu}  // all data
            categories={group}
            setCart={setCart}  //state
            addCart={addCart}  // function 
         
          />
        </div>
        <div className=" ">
      
      </div>
        
      </div>
    </>
  );
};
