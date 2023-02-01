import React, { useEffect, useState } from "react";
import image from "../assets/banner.jpg";
// import FoodMenuList from "../components/FoodMenuList";
import FoodMenuGroup from "../components/FoodGroup";
import axios from "axios";
import { Link } from "react-router-dom";

const info = `ร้านอาหารครัวคุณกอปรุงด้วยใจ เหมือนทำให้คนในครอบครัวทาน
  เราเปิดให้บริการตั้งแต่ปีพ.ศ. 2535 กว่า 30 ปีที่เรานำเสนอความ
  อร่อยแบบไทยแท้ เราคัดสรรวัตถุดิบชั้นดี ปลอดภัย ออร์แกนิค จาก
  เกษตรกรในพื้นที่สุโขทัย ปรุงด้วยสูตรลับต้นตำรับชาววังที่สืบทอด
  กันมารุ่นสู่รุ่น จัดแต่งมาบนจาน พร้อมเสิร์ฟความอร่อยให้กับคุณ`;

const Home = () => {
  const [foodMenus, setFoodMenus] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
    }).then((response) => {
      console.log("response", response);
      setFoodMenus(response.data);
    });
  }, []);

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
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
