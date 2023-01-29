import { useState, useEffect } from "react";
import axios from "axios";
import FoodMenuGroup from "../components/FoodMenuGroupComponent";
import ShopDetail from "../components/ShopDetailComponent";
import ShopTable from "../components/ShopTable";

export const Order = (props) => {
  // const homeContent = {
  //   shopName: `Mr.Bin Kitchen`,
  //   shopDescription: `สวรรค์ของคนรักอาหารไทย ดื่มด่ำไปกับอาหารมื้อโปรดที่ห้องอาหาร Mr.Bin Kitchen โดดเด่นเรื่องความพิถีพิถันตั้งแต่การคัดสรรวัตถุดิบ ไปจนถึงขั้นตอนการปรุงรส ทำให้อาหารของที่นี่มีเอกลักษณ์เฉพาะตัว จัดจ้านถึงเครื่อง ถูกปากคนไทย ครบรสไม่มีกั๊ก เมื่อใครได้กินเป็นต้องติดใจไปทุกราย นอกจากอาหารแล้วยังมาพร้อมกับบรรยากาศดี ๆ ตกแต่งในสไตล์เรโทรเหมาะสำหรับการพาครอบครัวหรือคนรักไปย้อนวันวาน กินอาหารไทยแท้ ๆ ที่คุ้นเคย`,
  //   shopLogo: `/shoplogo.jpg`,
  // };
  // const [foodMenu, setFoodMenu] = useState([]);
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
  //   }).then((response) => {
  //     // console.log("Res.Data : ", response.data);
  //     setFoodMenu(response.data);
  //     setCategories([...new Set(response.data?.map((item) => item.category))]);
  //   });
  // }, []);

  // return (
  //   <>
  //     {/* <p>{JSON.stringify(data)}</p> */}
  //     {
  //       data !== "" && data.data.map((r) => <div key={r.id} className="bg-red-300 mt-1">{r.id} . {r.title}</div>)
  //     }
  //   </>)

  return (
    <div className="mt-4 pt-16 md:mx-8 2xl:mx-32">
      <div className="pt-4 text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        รายการสั่งอาหาร
      </div>
      <ShopTable />
      {/* show when choose table with no order */}
      <div className="text-center">--- ไม่มีรายการสั่งอาหาร ---</div>
      {/* show when choose table with order */}
      <div>
        <div className="flex items-center justify-between">
          <h1>โต๊ะ 2 ยอดรวม ฿520</h1>
          <button className="bg-yellow-600 p-2 rounded-xl hover:bg-yellow-700">เก็บเงิน</button>
        </div>
        <div>
          <h1>หมายเลขคำสั่งซื้อ #44444</h1>
          <h1>สถานะ : on processing </h1>
          <div className="flex items-center justify-between">
            <h1>ชื่อเมนู</h1>
            <h1>฿130 x 1</h1>
          </div>
          <h1 className="text-right">ยอดรวม ฿520</h1>
          <button className="float-right bg-yellow-600 p-2 rounded-xl hover:bg-yellow-700">ทำเสร็จแล้ว</button>
        </div>
      </div>
    </div>
  );
};
