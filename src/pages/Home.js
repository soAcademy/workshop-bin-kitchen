import React, { useEffect, useState } from "react";
import image from "../assets/banner.jpg";
// import FoodMenuList from "../components/FoodMenuList";
import FoodMenuGroup from "../components/FoodGroup";
import axios from "axios";


const info = `ร้านอาหารครัวคุณกอปรุงด้วยใจ เหมือนทำให้คนในครอบครัวทาน
  เราเปิดให้บริการตั้งแต่ปีพ.ศ. 2535 กว่า 30 ปีที่เรานำเสนอความ
  อร่อยแบบไทยแท้ เราคัดสรรวัตถุดิบชั้นดี ปลอดภัย ออร์แกนิค จาก
  เกษตรกรในพื้นที่สุโขทัย ปรุงด้วยสูตรลับต้นตำรับชาววังที่สืบทอด
  กันมารุ่นสู่รุ่น จัดแต่งมาบนจาน พร้อมเสิร์ฟความอร่อยให้กับคุณ`;


const Home = () => {
  const [foodMenus, setFoodMenus] = useState([])

  useEffect(() => {
    axios ({
      method: "get",
      url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
    }).then((response) => {
      console.log("response", response);
      setFoodMenus(response.data)
    })
  },[])

  return (
   <section className="flex py-20 md:flex-row flex-col justify-center items-center">
   <div className="h-full flex flex-col justify-center mx-3">
      <hr className="border-2 drop-shadow-md"/>
      <div className="mx-5 text-center my-3 text-5xl uppercase font-bold">kor@
      <span className="text-red-600">Kitchen</span></div>
      <div className="m40">{info}</div>
      <div className="flex justify-center items-center">
        <img src={image} className="w-[500px] my-4 rounded-lg" />
      </div>
      {/* <FoodMenuList data={foodMenus} category="รายการแนะนำ" /> */}
      <div className="my-2">
      <FoodMenuGroup
        foodMenus={foodMenus}
        categories={[...new Set(foodMenus?.map((r) => r.category))]}
        />
        </div>
    </div>
    </section>
  );
};

export default Home;