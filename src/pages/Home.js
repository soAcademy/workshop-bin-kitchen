import React from "react";
import { BiListUl } from "react-icons/fa";
import FoodMenuListComponent from "../Components/FoodMenuList";
const mockdata = [
  {
    id: 1,
    name: "แกงส้มชะอมกุ้ง",
    image:
      "https://img.wongnai.com/p/1920x0/2018/12/17/bf69cc77dfb94a5ab6df20ffb0622cd2.jpg",
    price: 150,
    category: "แนะนำ",
  },
  {
    id: 2,
    name: "แกงส้มชะอมกุ้ง",
    image:
      "https://img.wongnai.com/p/1920x0/2018/12/17/bf69cc77dfb94a5ab6df20ffb0622cd2.jpg",
    price: 150,
    category: "แกง",
  },
  {
    id: 3,
    name: "ผัดคะน้าเห็ดหอม",
    image:
      "https://tourdefood.net/wp-content/uploads/2020/11/%E0%B8%84%E0%B8%B0%E0%B8%99%E0%B9%89%E0%B8%B2-%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%94%E0%B8%AB%E0%B8%AD%E0%B8%A1-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B8%AB%E0%B8%AD%E0%B8%A2-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B5%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E.jpg",
    price: 130,
    category: "แนะนำ",
  },
];

export const Home = () => {
  const info = {
    header: "ครัวคุณบอน",
    title: "ครัวคุณบอน",
    description:
      "ร้านอาหารครัวคุณบอนปรุงด้วยใจ เหมือนทำให้คนในครอบครัวทาน เราเปิดให้บริการตั้งแต่ปี พ.ศ. 2535 กว่า 30 ปีที่เรานำเสนอความอร่อยแบบไทยแท้ เราคัดสรรวัตถุดิบชั้นดี ปลอดภัย ออร์แกนิค จากเกษตรกรในพื้นที่สุโขทัย ปรุงด้วยสูตรลับต้นตำรับชาววังที่สืบทอดกันมารุ่นสู่รุ่น จัดแต่งมาบนจาน พร้อมเสิร์ฟความอร่อยให้กับคุณ",
  };

  return (
    <div>
      <div className="mt-20 text-3xl text-Gray font-bold uppercase text-center">
        {" "}
        {info.title}{" "}
      </div>
      <div className="p-4 text-gray"> {info.description}</div>
      <div className="p-2">
        <div className="flex flex-col md:flex-row">
          <img
            className="mt-1 h-360px] w-[360px] mx-auto object-cover"
            src="/bondfood1.webp"
            alt=""
          />
        </div>
      </div>

      <div className="mt-4 text-gray">
        <FoodMenuListComponent menus={mockdata}/>
        {/* {mockdata.map((menu) => (
          <div>{menu.name, }</div>
        ))} */}
      </div>
    </div>
  );
};
