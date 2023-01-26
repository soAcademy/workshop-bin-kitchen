import Nav from "../component/Nav";
import FoodList from "../component/FoodList";
import {useState,useEffect} from "react";
import axios from "axios";
import FoodMenuGroup from "../component/FoodMenuGroup";


const data = {
  title: "Heaven Kitchen Shop",
  content_title:
    "พูดถึง “อาหาร” เชื่อว่าทุกคนต้องสนใจ จะกินมาก กินน้อย คนเราก็ต้องกิน แต่เชื่อเหลือเกินว่าคนอีกไม่น้อยคงเบื่อกับอาหารที่จำเจ กินอยู่ทุกวันและอยากลองกินอาหารที่แปลกใหม่ แบบไม่เคยเจอเพื่อเติมเต็มรสชาติให้ชีวิตได้มีสีสันมากขึ้น",
};

export const Home = () => {
  const[menu,setMenu]=useState();
  const[group,setGroup]=useState();
  useEffect(()=>{
    const a = axios({
      method:'get',
      url:'https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9'
    })
    // console.log(a);
    .then((r)=>{
      setMenu(r.data);
      console.log(r.data);
      // setGroup(r.data?.map(r=>r.category));
      console.log('catgory',r.data?.map(r=>r.category));
      setGroup([...new Set(r.data?.map(r=>r.category))]);
      console.log('unique ',[...new Set(r.data?.map(r=>r.category))]);  // unique menu 
    });
  },[]);
  return (
    <>
      <div className=" flex flex-col">
        <div>
          <Nav />
        </div>
        <div className="mt-14">
          <div className="text-center text-xl font-bold">{data.title}</div>
          <div className="p-2 pl-4">{data.content_title}</div>
          <div className="p-4 grid justify-items-center  w-full">
            <img  className="rounded-lg md:h-[400px] " src="chicken.jpg"></img>
          </div>
        </div>
        {/* <div className="m-2 p-2"><FoodList FoodListData={menu}/></div> */}
        <div className="grid justify-items-center "><FoodMenuGroup foodAllData={menu} categories={group}/></div>
      </div>
    </>
  );
};
