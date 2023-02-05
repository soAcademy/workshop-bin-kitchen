import React, { useEffect, useState } from "react";
import image from "../assets/banner.jpg";
import FoodMenuGroup from "../components/FoodGroup";
import axios from "axios";
import Order from "../components/Order";

const info = `ร้านอาหารครัวคุณกอปรุงด้วยใจ เหมือนทำให้คนในครอบครัวทาน
  เราเปิดให้บริการตั้งแต่ปีพ.ศ. 2535 กว่า 30 ปีที่เรานำเสนอความ
  อร่อยแบบไทยแท้ เราคัดสรรวัตถุดิบชั้นดี ปลอดภัย ออร์แกนิค จาก
  เกษตรกรในพื้นที่สุโขทัย ปรุงด้วยสูตรลับต้นตำรับชาววังที่สืบทอด
  กันมารุ่นสู่รุ่น จัดแต่งมาบนจาน พร้อมเสิร์ฟความอร่อยให้กับคุณ`;

const Home = () => {
  const [foodMenus, setFoodMenus] = useState([]);
  const [togglePopup, setTogglePopup] = useState(false);
  const [cart, setCart] = useState([]);

  const addItem = (menu) => {
    console.log("menu:",menu)
    setTogglePopup(true);
    const checkMenu = cart.filter((r) => r.id === menu.id);
    console.log("checkMenu:", checkMenu);
    let newMenu = [];
    if (checkMenu.length > 0) {
      newMenu = cart.map((r) => {
        if (r.id === menu.id) {
          return { ...r, quantity: r.quantity + 1 };
        } else {
          return r;
        }
      });
    } else {
      newMenu = [...cart, { ...menu, quantity: 1 }];
    }
    console.log("New Menu", newMenu);

    // const newCart = [
    //   ...cart,
    //   {
    //     ...menu,
    //     // menu_id: menu.id,
    //     // price: menu.price,
    //     quantity: 1,
    //   },
    // ];
    localStorage.setItem("cart", JSON.stringify(newMenu));
    // console.log("New Cart:",newCart);
    // const menuList = [...new Set(newCart.map((r) => r.menu_id))];
    // const menuUnique = menuList.map((u) => {
    //   return newCart.filter((d) => d.menu_id === u);
    // });
    // console.log("Menu Unique:", menuUnique);
    // const sumMenu = menuUnique.map((r) =>
    //   r.reduce(
    //     (acc, a) => {
    //       acc.id = a.menu_id;
    //       acc.price += a.price;
    //       acc.quantity += a.quantity;
    //       console.log("a:", a);
    //       return acc;
    //     },
    //     { price: 0, quantity: 0 }
    //   )
    // );
    setCart(newMenu);
  };
  // console.log("Cart:",cart)

  // const _aACart = JSON.parse(localStorage.getItem("cart")) ?? [];
  // const menuList = [...new Set(_aACart.map((r) => r.menu_id))];
  // console.log("menuList", menuList);
  // const menuUnique = menuList.map((u) => {
  //   return _aACart.filter((d) => d.menu_id === u);
  // });

  // console.log("Menu Unique:", menuUnique);
  // const sumMenu = menuUnique.map((r) =>
  //   r.reduce(
  //     (acc, a) => {
  //       acc.id = a.menu_id;
  //       acc.price += a.price;
  //       acc.quantity += a.quantity;
  //       console.log("a:", a);
  //       return acc;
  //     },
  //     { price: 0, quantity: 0 }
  //   )
  // );
  // setCart(sumMenu);
  // console.log("sumMenu", sumMenu);

  useEffect(() => {
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-menus",
    }).then((response) => {
      console.log("response", response);
      setFoodMenus(response.data);
      const _cart = JSON.parse(localStorage.getItem("cart")) ?? [];
      setCart(_cart);
    });
  }, []);
  // console.log("foodMenus",foodMenus)
  // console.log("cart",cart)

  return (
    <section className="w-full flex py-28 md:flex-row flex-col justify-center items-center">
      <div className="w-full h-full flex flex-col justify-center mx-3">
        {/* <hr className="border-2 drop-shadow-md" /> */}
        <h1 className="text-center my-7 text-7xl lg:text-9xl uppercase font-bold text-yellow-600">
          kor<span className="text-6xl lg:text-8xl text-red-600">@</span>
          <span className="lowercase font-normal text-slate-200">Kitchen</span>
        </h1>
        <div className="2xl:mx-[500px]">
          <div className="m40 text-3xl lg:text-5xl my-5 leading-relaxed lg:leading-relaxed">
            {info}
          </div>
          <div className="flex justify-center items-center">
            <img
              src={image}
              className="w-[800px] lg:w-[1000px] my-5 rounded-3xl"
              alt="Food"
            />
          </div>
          {/* <FoodMenuList data={foodMenus} category="รายการแนะนำ" /> */}
          <div>
            <FoodMenuGroup
              foodMenus={foodMenus}
              categories={[...new Set(foodMenus?.map((r) => r.category))]}
              addItem={addItem}
            />

            {togglePopup && (
              <Order setTogglePopup={setTogglePopup} cart={cart} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
