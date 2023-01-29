import React, { useEffect, useState } from "react";
import image from "../assets/banner.jpg";
// import FoodMenuList from "../components/FoodMenuList";
import FoodMenuGroup from "../components/FoodGroup";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi"


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





const Home = () => {
  const [foodMenus, setFoodMenus] = useState([])
  const [toggle, setToggle] = useState(false);

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
    <div className="border-2 border-blue-500 flex flex-col justify-center py-4 w-10/12 mx-auto border-1 border-solid border-red">
      <div className="flex">
      <button className="border-2 border-red-500 mt-1 text-xl" onClick={() => setToggle(!toggle)}><GiHamburgerMenu /></button>
      <div className="ml-6 border-2 border-red-500">ครัวคุณกอ</div>
      </div>
      <hr className="mt-5 border-2 drop-shadow-md"/>
      <div className="mx-5 px-2 text-center my-1 border-2 border-red-500">ร้านอาหารคุณกอ</div>
      <div className="m40">{info}</div>
      <div className="flex justify-center items-center border-2 border-red-500">
        <img src={image} className="w-[500px] my-2 rounded-lg" />
      </div>
      {/* <FoodMenuList data={foodMenus} category="รายการแนะนำ" /> */}
      <div className="my-2 border-2 border-red-500">
      <FoodMenuGroup
        foodMenus={foodMenus}
        categories={[...new Set(foodMenus?.map((r) => r.category))]}
        />
        </div>
    </div>
  );
};

export default Home;