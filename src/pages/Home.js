import { BiListUl } from "react-icons/fa";
import FoodMenuListComponent from "../Conponents/FoodMenuList";
import Navbar from "../Conponents/Nav";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodMenuGroup from "../Conponents/FoodMenuGroup";

export const Home = () => {
  const info = {
    header: "ครัวคุณบอน",
    title: "ครัวคุณบอน",
    description:
      "ร้านอาหารครัวคุณบอนปรุงด้วยใจ เหมือนทำให้คนในครอบครัวทาน เราเปิดให้บริการตั้งแต่ปี พ.ศ. 2535 กว่า 30 ปีที่เรานำเสนอความอร่อยแบบไทยแท้ เราคัดสรรวัตถุดิบชั้นดี ปลอดภัย ออร์แกนิค จากเกษตรกรในพื้นที่สุโขทัย ปรุงด้วยสูตรลับต้นตำรับชาววังที่สืบทอดกันมารุ่นสู่รุ่น จัดแต่งมาบนจาน พร้อมเสิร์ฟความอร่อยให้กับคุณ",
  };

  const [menus, setMenus] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
    }).then((res) => {
      setMenus(res.data);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="mt-20 text-3xl text-Gray font-bold uppercase text-center">
        {" "}
        {info.title}{" "}
      </div>
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
          props={menus} 
          categories={[...new Set(menus?.map((r)=> r.category))]}/>
        <FoodMenuListComponent menus={menus} />
        {/* {mockdata.map((menu) => (
          <div>{menu.name, }</div>
        ))} */}
      </div>
    </div>
  );
};
