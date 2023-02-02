import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FoodMenuGroup from "../components/FoodMenuGroupComponent";
import ShopDetail from "../components/ShopDetailComponent";
import PopupForm from "../components/PopupForm";

export const Home = (props) => {
  const homeContent = {
    shopName: `Mr.Bin Kitchen`,
    shopDescription: `สวรรค์ของคนรักอาหารไทย ดื่มด่ำไปกับอาหารมื้อโปรดที่ห้องอาหาร Mr.Bin Kitchen โดดเด่นเรื่องความพิถีพิถันตั้งแต่การคัดสรรวัตถุดิบ ไปจนถึงขั้นตอนการปรุงรส ทำให้อาหารของที่นี่มีเอกลักษณ์เฉพาะตัว จัดจ้านถึงเครื่อง ถูกปากคนไทย ครบรสไม่มีกั๊ก เมื่อใครได้กินเป็นต้องติดใจไปทุกราย นอกจากอาหารแล้วยังมาพร้อมกับบรรยากาศดี ๆ ตกแต่งในสไตล์เรโทรเหมาะสำหรับการพาครอบครัวหรือคนรักไปย้อนวันวาน กินอาหารไทยแท้ ๆ ที่คุ้นเคย`,
    shopLogo: `/shoplogo.jpg`,
  };
  const [openPop, setOpenPop] = useState(false);
  const [foodMenu, setFoodMenu] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios({
      // ทำไมถึงพอใช้โพสแมนแล้ว ต้องเปลี่ยนเป้นPost
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-menus",
    }).then((response) => {
      console.log("Res.Data : ", response.data);
      setFoodMenu(response.data);
      setCategories([...new Set(response.data?.map((item) => item.category))]);
    });
  }, []);
console.log("setOpenPop Home : " , setOpenPop);
  // return (
  //   <>
  //     {/* <p>{JSON.stringify(data)}</p> */}
  //     {
  //       data !== "" && data.data.map((r) => <div key={r.id} className="bg-red-300 mt-1">{r.id} . {r.title}</div>)
  //     }
  //   </>)

  return (
    <div className="mt-4 pt-16 md:mx-8 2xl:mx-32">
      <ShopDetail homeContent={homeContent} />

      <FoodMenuGroup
        setOpenPop={setOpenPop}
        onBypassAddButtonClickedToMainPage={(menuObj) => {
          console.log("Home / Menu Page" + JSON.stringify(menuObj));
          props.onBypassAddButtonClickedToApps(menuObj);
        }}
        menus={foodMenu}
        // categories={categories?.filter((r) => r === "แนะนำ")}
        categories={categories}
      />

      {openPop && <PopupForm setOpenPop={setOpenPop} />}
    </div>
  );
};
