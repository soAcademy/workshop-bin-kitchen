import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FoodMenuGroup from "../components/FoodMenuGroupComponent";
import ShopDetail from "../components/ShopDetailComponent";
import PopupForm from "../components/PopupForm";

export const Home = () => {
  const homeContent = {
    shopName: `Mr.Bin Kitchen`,
    shopDescription: `สวรรค์ของคนรักอาหารไทย ดื่มด่ำไปกับอาหารมื้อโปรดที่ห้องอาหาร Mr.Bin Kitchen โดดเด่นเรื่องความพิถีพิถันตั้งแต่การคัดสรรวัตถุดิบ ไปจนถึงขั้นตอนการปรุงรส ทำให้อาหารของที่นี่มีเอกลักษณ์เฉพาะตัว จัดจ้านถึงเครื่อง ถูกปากคนไทย ครบรสไม่มีกั๊ก เมื่อใครได้กินเป็นต้องติดใจไปทุกราย นอกจากอาหารแล้วยังมาพร้อมกับบรรยากาศดี ๆ ตกแต่งในสไตล์เรโทรเหมาะสำหรับการพาครอบครัวหรือคนรักไปย้อนวันวาน กินอาหารไทยแท้ ๆ ที่คุ้นเคย`,
    shopLogo: `/shoplogo.jpg`,
  };
  const [openPop, setOpenPop] = useState(false);
  const [foodMenus, setFoodMenus] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);
  console.log("order  = ", orders);

  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:3100/binKitchen/getMenus",
    }).then((response) => {
      console.log("Res.Data : ", response.data);
      setFoodMenus(response.data);
      setCategories([...new Set(response.data?.map((item) => item.categoryName))]);
      console.log("Categories : ", [...new Set(response.data?.map((item) => item.categoryName))])
    });
  }, []);
console.log("setOpenPop Home  : " , setOpenPop);


  return (
    <div className="mt-4 pt-16 md:mx-8 2xl:mx-32">
      <ShopDetail homeContent={homeContent} />

      <FoodMenuGroup
        setOpenPop={setOpenPop}
        orders={orders}
        setOrders={setOrders}
        foodMenus={foodMenus}
        // categories={categories?.filter((r) => r === r.category)}
        categories={categories}
      />

      {openPop && <PopupForm orders={orders} setOpenPop={setOpenPop} setOrders={setOrders}/>}
    </div>
  );
};
