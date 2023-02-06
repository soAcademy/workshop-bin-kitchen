import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../assets/testlogo.jpg";
import FoodMenuGroup from "../components/FoodMenuGroup.js";
import CartPop from "../components/CartPop.js";

export const Home = () => {
  const shopInfo = {
    name: "ครัวข้างบ้าน",
    desc: `ร้านอาหารครัวข้างบ้านปรุงด้วยใจ เหมือนทำให้คนในครอบครัวทาน
    เราเปิดให้บริการตั้งแต่ปี พ.ศ. 2535 กว่า 30 ปีที่เรานำเสนอความ
    อร่อยแบบไทยแท้ เราคัดสรรวัตถุดิบชั้นดี ปลอดภัย ออร์แกนิค จาก
    เกษตรกรในพื้นที่สุโขทัย ปรุงด้วยสูตรลับต้นตำรับชาววังที่สืบทอด
    กันมารุ่นสู่รุ่น จัดแต่งมาบนจาน พร้อมเสิร์ฟความอร่อยให้กับคุณ`,
  };

  const [menus, setMenus] = useState([]);
  const [type, setType] = useState([]);
  const [cart, setCart] = useState([]);
  const [toggleCart, setToggleCart] = useState(false);


  useEffect(() => {
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-menus",
    }).then((response) => {
      // console.log(response.data);
      setMenus(response.data);
    });
  }, []);

  useEffect(() => {
    // console.log(menus);
    const cat = menus?.map((r) => r.category);
    const uniqCat = [...new Set(cat)];
    // console.log(cat);
    // console.log(uniqCat);
    setType(uniqCat);
  }, [menus]);

  const uniqCart = (data) => {
    // console.log("test", data);
    if (cart.length > 0) {
      // console.log("a", cart);
      if (cart.filter((r) => r.id === data.id).length > 0) {
        const plusQty = cart.map((r) => {
          if (r.id === data.id) {
            return { ...r, qty: r.qty + 1 };
          } else {
            return r;
          }
        });
        setCart(plusQty);
      } else {
        setCart([...cart, { ...data, qty: 1 }]);
      }
    } else {
      setCart([{ ...data, qty: 1 }]);
    }
    // console.log("test2", cart);
  };

  

  return (
    <div>
      <div className="px-4 w-full">
        <div className="">
          <div className="h-14 mt-20">
            <p className="font-normal font-[Prompt] text-3xl text-center">
              {shopInfo.name}
            </p>
          </div>
          <div className="flex h-28 w-full md:justify-center mt-4">
            <div className="font-normal font-[Prompt] text-sm md:text-lg md:text-left indent-8 md:w-5/6">
              {shopInfo.desc}
            </div>
          </div>
          <div className="flex mt-4 md:justify-center md:mt-5">
            <img
              src={logo}
              alt="logo"
              className="w-[385px] h-[243px] md:w-[500px] rounded-lg"
            />
          </div>
          <div className="mt-10">
            <div className="md:grid md:gap-4 md:grid-cols-1 lg:grid-cols-2">
              {type?.map((item, idx) => (
                <FoodMenuGroup
                  key={idx}
                  menus={menus}
                  category={item}
                  setToggleCart={setToggleCart}
                  cart={cart}
                  setCart={setCart}
                  uniqCart={uniqCart}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        {toggleCart && (
          <CartPop
            cart={cart}
            setCart={setCart}
            setToggleCart={setToggleCart}
          />
        )}
      </div>
    </div>
  );
};
