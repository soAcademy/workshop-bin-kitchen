import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../assets/banner.jpg";
// import TestMenusList from "../components/FoodMenusList.js";
import FoodMenuGroup from "../components/FoodMenuGroup.js";

export const Home = () => {
  const shopInfo = {
    name: "ครัวเลิศรส",
    desc: `ร้านอาหารครัวเลิศรสปรุงด้วยใจ เหมือนทำให้คนในครอบครัวทาน
    เราเปิดให้บริการตั้งแต่ปี พ.ศ. 2535 กว่า 30 ปีที่เรานำเสนอความ
    อร่อยแบบไทยแท้ เราคัดสรรวัตถุดิบชั้นดี ปลอดภัย ออร์แกนิค จาก
    เกษตรกรในพื้นที่สุโขทัย ปรุงด้วยสูตรลับต้นตำรับชาววังที่สืบทอด
    กันมารุ่นสู่รุ่น จัดแต่งมาบนจาน พร้อมเสิร์ฟความอร่อยให้กับคุณ`,
    img: "../assets/banner.jpg",
  };

  const [menus, setMenus] = useState([]);
  const [type, setType] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
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

  return (
    <div className="px-4 w-full">
      <div className="">
        <div className="h-14 mt-20">
          <p className="font-normal font-[Prompt] text-3xl text-center">
            {shopInfo.name}
          </p>
        </div>
        <div className="flex h-28 w-full md:justify-center mt-4">
          <div className="font-normal font-[Prompt] text-sm md:text-left md:indent-8 w-5/6 px-4">
            {shopInfo.desc}
          </div>
        </div>
        <div className="flex mt-4 md:justify-center">
          <img
            src={logo}
            alt="logo"
            className="w-[385px] h-[243px] md:w-[500px]"
          />
        </div>
        <div className="mt-10">
          {/* <FoodMenuGroup
            foodMenus={menus}
            categories={type}
          /> */}
          {type.map((item, idx) => (
            <FoodMenuGroup key={idx} foodMenus={menus} category={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
