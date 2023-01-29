import { useState, useEffect } from "react";
import axios from "axios";
import FoodMenuGroup from "../components/FoodMenuGroupComponent";
import ShopDetail from "../components/ShopDetailComponent";

export const Menu = (props) => {
  const homeContent = {
    shopName: `Mr.Bin Kitchen`,
    shopDescription: `สวรรค์ของคนรักอาหารไทย ดื่มด่ำไปกับอาหารมื้อโปรดที่ห้องอาหาร Mr.Bin Kitchen โดดเด่นเรื่องความพิถีพิถันตั้งแต่การคัดสรรวัตถุดิบ ไปจนถึงขั้นตอนการปรุงรส ทำให้อาหารของที่นี่มีเอกลักษณ์เฉพาะตัว จัดจ้านถึงเครื่อง ถูกปากคนไทย ครบรสไม่มีกั๊ก เมื่อใครได้กินเป็นต้องติดใจไปทุกราย นอกจากอาหารแล้วยังมาพร้อมกับบรรยากาศดี ๆ ตกแต่งในสไตล์เรโทรเหมาะสำหรับการพาครอบครัวหรือคนรักไปย้อนวันวาน กินอาหารไทยแท้ ๆ ที่คุ้นเคย`,
    shopLogo: `/shoplogo.jpg`,
  };
  const [foodMenu, setFoodMenu] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
    }).then((response) => {
      console.log("only Res : " + response);
      console.log("Res.Data : ", response.data);
      setFoodMenu(response.data);
      setCategories([...new Set(response.data?.map((item) => item.category))]);
    });
  }, []);

  // return (
  //   <>
  //     {/* <p>{JSON.stringify(data)}</p> */}
  //     {
  //       data !== "" && data.data.map((r) => <div key={r.id} className="bg-red-300 mt-1">{r.id} . {r.title}</div>)
  //     }
  //   </>)

  return (
    <div className="pt-16">
      <FoodMenuGroup menus={foodMenu} categories={categories} />
    </div>
  );
};
