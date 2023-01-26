import { useState,useEffect } from "react";
import MenuList from "../component/FoodMenulist";
import axios from "axios";
import FoodMenuGroup from "../component/FoodMenuGroup";
// import {Navbar } from "../component/Navbar";

// const foodMenus = [

// {
//   "id": 1,
//   "name": "ลาบหมู-เนื้อ-ไก่",
//   "image": "https://www.unileverfoodsolutions.co.th/dam/global-ufs/mcos/SEA/calcmenu/recipes/TH-recipes/red-meats-&-red-meat-dishes/%E0%B8%A5%E0%B8%B2%E0%B8%9A%E0%B8%AB%E0%B8%A1%E0%B8%B9/%E0%B8%A5%E0%B8%B2%E0%B8%9A%E0%B8%AB%E0%B8%A1%E0%B8%B9_header.jpg",
//   "price": 150,
//   "category": "แนะนำ"
// },
// {
//   "id": 2,
//   "name": "ส้มตำไทยใส่ปู-ปลาร้า",
//   "image": "https://img.wongnai.com/p/1920x0/2018/12/17/bf69cc77dfb94a5ab6df20ffb0622cd2.jpg",
//   "price": 150,
//   "category": "แนะนำ"
// },
// {
//   "id": 3,
//   "name": "หมูย่าง น้ำจิ้มแจ่ว",
//   "image": "https://food.mthai.com/app/uploads/2017/03/neck-pork-sauce-e1554871690618.jpg",
//   "price": 130,
//   "category": "ย่าง"
// },
// {
//   "id": 4,
//   "name": "ซุปหน่อไม้",
//   "image": "https://img.wongnai.com/p/1920x0/2017/09/29/349755b65c024b329065528bbddf8e4b.jpg",
//   "price": 130,
//   "category": "ต้ม"
// },
// {
//   "id": 5,
//   "name": "ยำปลาร้ากุ้งสด",
//   "image": "https://www.cpbrandsite.com/contents/recipe/cyc9mgbjiqip9ml8kdpimepmzdjjkcxvslk2jx6t.png",
//   "price": 200,
//   "category": "แนะนำ"
// },

//     {
//       "id": 6,
//       "name": "ต้มแซ่บกระดูกอ่อน",
//       "image": "https://i.ytimg.com/vi/nh4nzZza4yE/maxresdefault.jpg",
//       "price": 200,
//       "category": "ต้ม"
//     },
//     {
//       "id": 7,
//       "name": "เสือร้องไห้",
//       "image": "https://www.maeban.co.th/upfiles/blog/2644_37_22.jpg",
//       "price": 130,
//       "category": "ย่าง"
//     },
//     {
//       "id": 8,
//       "name": "ต้มเล้งแซ่บ",
//       "image": "https://i.ytimg.com/vi/Y-iH7nfeUCE/maxresdefault.jpg",
//       "price": 130,
//       "category": "ต้ม"
//     },
//     {
//       "id": 9,
//       "name": "ก้อยเนื้อ",
//       "image": "https://i.ytimg.com/vi/6yM0oog1iDQ/maxresdefault.jpg",
//       "price": 130,
//       "category": "ยำ"
//     },
//     {
//       "id": 10,
//       "name": "ส้มตำทอด",
//       "image": "https://img-global.cpcdn.com/recipes/1ec6618e288a3f43/1200x630cq70/photo.jpg",
//       "price": 250,
//       "category": "ตำ"
//     },
//     {
//       "id": 11,
//       "name": "ส้มตำกุ้งสด",
//       "image": "https://www.hongthongrice.com/v2/wp-content/uploads/2018/01/HTR-Deep-Fried-Shrimp-Cover.jpg",
//       "price": 180,
//       "category": "ตำ"
//     },
//     {
//       "id": 12,
//       "name": "ตำหอยดอง",
//       "image": "https://food.mthai.com/app/uploads/2018/05/Lemongrass-Fried-Chicken.jpg",
//       "price": 160,
//       "category": "ตำ"
//     },
//     {
//       "id": 13,
//       "name": "ตำข้าวโพด",
//       "image": "http://f.ptcdn.info/754/045/000/od2lq597lpF6HbXH4y4-o.jpg",
//       "price": 180,
//       "category": "ตำ"
//     },
//     {
//       "id": 14,
//       "name": "ตำหอยแครง",
//       "image": "https://www.ajinomotofoodservicethailand.com/wp-content/uploads/2019/01/21-2.jpg",
//       "price": 180,
//       "category": "ตำ"
//     },
//     {
//       "id": 15,
//       "name": "ตำซั่ว",
//       "image": "https://img-global.cpcdn.com/recipes/30d629683ebad9f5/1200x630cq70/photo.jpg",
//       "price": 180,
//       "category": "ตำ"
//     },
//     {
//       "id": 16,
//       "name": "อ่อมปลาดุก",
//       "image": "https://shopee.co.th/blog/wp-content/uploads/2021/03/%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B8%95%E0%B9%89%E0%B8%A1%E0%B8%88%E0%B8%B7%E0%B8%94%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%AA%E0%B8%B1%E0%B8%9A.jpg",
//       "price": 180,
//       "category": "ต้ม"
//     },
//     {
//       "id": 17,
//       "name": "ลาบปลาดุก",
//       "image": "https://thainipponfoods.com/wp-content/uploads/2022/01/Chicken-coconut-milk-pic-1.jpg",
//       "price": 180,
//       "category": "ยำ"
//     },
//     {
//       "id": 18,
//       "name": "ต้มแซ่บหมูกระดูกอ่อน",
//       "image": "https://www.khaosod.co.th/wpapp/uploads/2020/09/col10p1-2.jpg",
//       "price": 180,
//       "category": "ต้ม"
//     }
// ]
// ];

export const Home = () => {
  const [foodMenus, setFoodMenus] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
    }).then((res) => {
      console.log("Res", res.data);
      setFoodMenus(res.data);
    });
  },[]);

  return (
    //   <div className="px-4">
    //     Home
    //     <foodMenuGroup
    //     foodMenus={foodMenus}
    //     categories={[...new Set(res.data?.map((r) => r.category))]}
    //     />
    //     </div>
    // );

    <div className="px-4">
      <h1 className="text-3xl text-center mt-4">คุณบินตำแซ่บ</h1>
      <p className="mt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
        saepe commodi voluptates, magnam cum blanditiis ipsum! Quas perspiciatis
        ut ullam qui impedit dolores tenetur error exercitationem! Officia
        ratione esse at, odit cumque tempore voluptatem soluta consequuntur
        quasi earum voluptatibus eveniet modi illum enim assumenda totam vitae
        dolores! Eum, non. Eaque!
      </p>
      <img
        src="https://www.matichonacademy.com/wp-content/uploads/2021/03/thai-food-som-tum-papaya-salad.jpg"
        className="w-full mt-4 rounded-lg"
      />

      <h4 className="mt-4 mb-2 font-bold">รายการแนะนำ</h4>
      <FoodMenuGroup
        foodMenus={foodMenus}
        categories={[...new Set(foodMenus?.map((r) => r.category))]}
        />
      {/* {foodMenus?.map((foodMenu) => (
        <MenuList menu={foodMenu} />
      ))} */}
    </div>
  );
};

// const MenuList = ({ menu }) => (

//   <div className="flex mb-4">
//     <img src={menu.image} className="object-cover w-10 h-10 rounded-lg" />
//     <div className="ml-2 flex-auto">
//       {menu.name}
//       <p className="text-red-500 text-sm">฿{menu.price}</p>
//     </div>
//     <div className="ml-2 ">
//       <button className="button bg-blue-300 active:bg-red-400 px-4 py-2 rounded-lg ml-2">
//         Add
//       </button>
//     </div>
//   </div>
// );
// export default MenuList;
