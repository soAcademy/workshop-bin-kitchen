import React, { useState, useEffect } from "react";
// import axios from "axios";
import FoodMenuList from "../components/FoodMenuList";
const Home = ({ info }) => {
  const mockData = [
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

  // const Effect = () => {
  //   const [menus, setMenus] = useState();
  
  //   useEffect(() => {
  //     axios({ method: "get", url: "https://pastebin.com/raw/x1EY0NL9" }).then(
  //       (response) => {
  //         console.log(response.data);
  //         setMenus(response.data);
  //       }
  //     );
  //   }, []);

  return (
    <div>
      <div className="flex flex-col m-1 mt-11">
        <div className="text-5xl m-5 mx-auto text-bold text-sky-700">
          {info.title}
        </div>
      </div>
      <div className="m-3">{info.intro}</div>
      <img
        src="/thaifood.jpg"
        className="mx-auto w-[600px] h-[300px] px-5"
      ></img>
      <div>
        <FoodMenuList data={mockData} category="รายการแนะนำ" />
      </div>
    </div>
  );
};


export default Home;
