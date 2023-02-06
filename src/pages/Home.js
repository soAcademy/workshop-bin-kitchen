import { BiListUl } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodMenuGroup from "../Components/FoodMenuGroup";
import { CartPopup } from "../Components/CartPopup";

// const sum = (a,b) => {
//   return a + b
// }

// sum(b=5,a=10)
// // 15

export const Home = () => {
  const [toggleCartPopup, setToggleCartPopup] = useState(false);
  const [cart, setCart] = useState([]);
  // มันเป็น syntax ของมัน ที่จะต้องมีสองค่าคืออันแรกคือ state กับที่เอาไว้ set state

  const updateCart = ({ sign, cart, id, name, price }) => {
    if (cart.some((item) => item.id === id)) {
      return cart.reduce((arr, c) => {
        arr.push(
          c.id === id
            ? {
                id,
                quantity: sign + c.quantity,
                name,
                price,
                totalPrice: (sign + c.quantity) * price,
                Paid: (sign + c.quantity) * price * id,
              }
            : c
        );
        return arr;
      }, []);
    }
    return [...cart, { id, quantity: 1, name, price, totalPrice: price }];
  };


  const info = {
    header: "ครัวคุณบอน",
    title: "ครัวคุณบอน",
    description:
      "ร้านอาหารครัวคุณบอนปรุงด้วยใจ เหมือนทำให้คนในครอบครัวทาน เราเปิดให้บริการตั้งแต่ปี พ.ศ. 2535 กว่า 30 ปีที่เรานำเสนอความอร่อยแบบไทยแท้ เราคัดสรรวัตถุดิบชั้นดี ปลอดภัย ออร์แกนิค จากเกษตรกรในพื้นที่สุโขทัย ปรุงด้วยสูตรลับต้นตำรับชาววังที่สืบทอดกันมารุ่นสู่รุ่น จัดแต่งมาบนจาน พร้อมเสิร์ฟความอร่อยให้กับคุณ",
  };

  const [menus, setMenus] = useState();

  useEffect(() => {
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-menus",
    }).then((res) => {
      setMenus(res.data);
    });
  }, []);


  return (
    <div>
      <div className="mt-20 text-3xl text-Gray font-bold uppercase text-center">{" "}{info.title}{" "}</div>
      <div className="p-4 text-gray"> {info.description}</div>
      <div className="p-2">
        <div className="flex flex-col md:flex-row">
          <img
            className="mt-1 h-360px] w-[360px] mx-auto object-cover rounded-lg"
            src="/bondfood1.webp"
            alt=""
          />
        </div>
      </div>

      <div className="mt-4 text-gray">
        <FoodMenuGroup
          categories={[...new Set(menus?.map((r) => r.category))]}
          menus={menus}
          cart={cart}
          setCart={setCart}
          updateCart={updateCart}
          setToggleCartPopup={setToggleCartPopup}
          
        />
      </div>
      {toggleCartPopup && (
        <CartPopup
          cart={cart}
          setCart={setCart}
          updateCart={updateCart}
          toggleCartPopup={toggleCartPopup}
          setToggleCartPopup={setToggleCartPopup}
        />
      )}
    </div>
  );
};

// How to import/export

// export default Home;

// import A from './A';
// export default A

// import { A } from './A';
// export const A
// export {
//   A,
// }
