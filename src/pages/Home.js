import React, { useEffect, useState } from "react";
import image from "../assets/banner.jpg";
import FoodMenuList from "../components/FoodMenuList";
import axios from "axios";


const info = `ร้านอาหารครัวคุณกอปรุงด้วยใจ เหมือนทำให้คนในครอบครัวทาน
  เราเปิดให้บริการตั้งแต่ปีพ.ศ. 2535 กว่า 30 ปีที่เรานำเสนอความ
  อร่อยแบบไทยแท้ เราคัดสรรวัตถุดิบชั้นดี ปลอดภัย ออร์แกนิค จาก
  เกษตรกรในพื้นที่สุโขทัย ปรุงด้วยสูตรลับต้นตำรับชาววังที่สืบทอด
  กันมารุ่นสู่รุ่น จัดแต่งมาบนจาน พร้อมเสิร์ฟความอร่อยให้กับคุณ`;

// const mockData = [
//   {
//     id: 1,
//     name: "แกงส้มชะอมกุ้ง",
//     image:
//       "https://img.wongnai.com/p/1920x0/2018/12/17/bf69cc77dfb94a5ab6df20ffb0622cd2.jpg",
//     price: 150,
//     category: "แนะนำ",
//   },
//   {
//     id: 2,
//     name: "แกงส้มชะอมกุ้ง",
//     image:
//       "https://img.wongnai.com/p/1920x0/2018/12/17/bf69cc77dfb94a5ab6df20ffb0622cd2.jpg",
//     price: 150,
//     category: "แกง",
//   },
//   {
//     id: 3,
//     name: "ผัดคะน้าเห็ดหอม",
//     image:
//       "https://tourdefood.net/wp-content/uploads/2020/11/%E0%B8%84%E0%B8%B0%E0%B8%99%E0%B9%89%E0%B8%B2-%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%94%E0%B8%AB%E0%B8%AD%E0%B8%A1-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B8%AB%E0%B8%AD%E0%B8%A2-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B5%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E.jpg",
//     price: 130,
//     category: "แนะนำ",
//   },
// ];





export const Home = () => {
  const [foodMenus, setFoodMenus] = useState([])

  useEffect(() => {
    axios ({
      method: "get",
      url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
    }).then((response) => {
      console.log("response", response);
      setFoodMenus(response.data)
    })
  })

  return (
    <div className="px-4 flex flex-col">
      <div className="text-xl font-bold my-2">ครัวคุณกอ</div>
      <div className="px-2 text-center">ร้านอาหารคุณกอ</div>
      <div className="px10">{info}</div>
      <div className="flex flex-col justify-center">
        <img src={image} className="w-[500px] h-auto" />
      </div>
      <FoodMenuList data={foodMenus} category="รายการแนะนำ" />
    </div>
  );
};
