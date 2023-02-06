import Nav from "./component/Nav";
import ListMenu from "./component/ListMenu";
// import CartPopUp from "./component/CartPopUp";
// import {useState,useEffect} from "react";
// import axios from "axios";

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
  {
    id: 4,
    name: "ผัดคะน้าเห็ดหอม",
    image:
      "https://tourdefood.net/wp-content/uploads/2020/11/%E0%B8%84%E0%B8%B0%E0%B8%99%E0%B9%89%E0%B8%B2-%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%94%E0%B8%AB%E0%B8%AD%E0%B8%A1-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B8%AB%E0%B8%AD%E0%B8%A2-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B5%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E.jpg",
    price: 130,
    category: "ผัด",
  },
  {
    id: 5,
    name: "หมูสามชั้นคั่วพริกเกลือ",
    image: "https://i.ytimg.com/vi/nh4nzZza4yE/maxresdefault.jpg",
    price: 200,
    category: "แนะนำ",
  },
  {
    id: 6,
    name: "หมูสามชั้นคั่วพริกเกลือ",
    image: "https://i.ytimg.com/vi/nh4nzZza4yE/maxresdefault.jpg",
    price: 200,
    category: "ทอด",
  },
  {
    id: 7,
    name: "ผัดมะเขือยาวหมูสับ",
    image: "https://www.maeban.co.th/upfiles/blog/2644_37_22.jpg",
    price: 130,
    category: "ผัด",
  },
  {
    id: 8,
    name: "ปลากะพงผัดคึ่นช่าย",
    image: "https://i.ytimg.com/vi/Y-iH7nfeUCE/maxresdefault.jpg",
    price: 130,
    category: "ผัด",
  },
  {
    id: 9,
    name: "ยอดฟักแม้วผัดหมูสับ",
    image: "https://i.ytimg.com/vi/6yM0oog1iDQ/maxresdefault.jpg",
    price: 130,
    category: "ผัด",
  },
  {
    id: 10,
    name: "ปลานิลทอดน้ำปลา",
    image:
      "https://img-global.cpcdn.com/recipes/1ec6618e288a3f43/1200x630cq70/photo.jpg",
    price: 250,
    category: "ทอด",
  },
];
const Home = () => {
  // const[menu,setMenu] =useState();

  const categories = [...new Set(mockdata.map((r) => r.category))];
  console.log(categories);
// useEffect(()=>{
//   axios({
//     method: 'post',
//     url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-menus",
//   }).then((response)=>{
//     setMenu(response.data);
//   })
// },[])

  return (
    <>
      <div className="bg-slate-600 w-screen min-h-screen">
        <div>
          <Nav />
        </div>
        <div className="">
          <img
            className="p-2 " alt="Doreamon "
            src="https://tse2.mm.bing.net/th?id=OIP.HU42KXcmKotDvfb_WgNmWAHaEo&pid=Api&P=0"
          />
        </div>
        <div>
          <ListMenu categories={categories}
                    mockdata={mockdata}
                   />
        </div>
        <div>
       
        </div>
      </div>
    </>
  );
};
export default Home;
