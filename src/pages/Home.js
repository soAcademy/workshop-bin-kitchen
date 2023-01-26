
import { useState, useEffect } from "react";
import axios from "axios";
import FoodMenuGroup from "../components/FoodMenuGroupComponent";

export const Home = (props) => {
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
      name: "ผัดคะน้าเห็ดหอม",
      image:
        "https://tourdefood.net/wp-content/uploads/2020/11/%E0%B8%84%E0%B8%B0%E0%B8%99%E0%B9%89%E0%B8%B2-%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%94%E0%B8%AB%E0%B8%AD%E0%B8%A1-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B8%AB%E0%B8%AD%E0%B8%A2-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B5%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E.jpg",
      price: 130,
      category: "ผัด",
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
  const [foodMenu, setFoodMenu] = useState([]);
  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
    }).then((response) => {
      console.log("only Res : " + response);
      console.log("Res.Data : ", response.data);
      setFoodMenu(response.data);
      setCategories([...new Set(response.data?.map(item => item.category))])
    });
  }, []);
  console.log("Categ : ", categories);

  // return (
  //   <>
  //     {/* <p>{JSON.stringify(data)}</p> */}
  //     {
  //       data !== "" && data.data.map((r) => <div key={r.id} className="bg-red-300 mt-1">{r.id} . {r.title}</div>)
  //     }
  //   </>)

  return (
    <div className="px-8">
      {/* START NAV BAR */}
      <div className="bg-gray-200 px-4">THIS IS NAV BAR</div>
      {/* END NAV BAR */}

      {/* START CONTENT BOX */}
      <div className="pt-3 flex flex-col items-center">
        {/* START NAME AND DESCRIPTION */}
        <div>
          <div className="text-center text-4xl">
            <h1 className="">{props.homeContent.shopName}</h1>
          </div>
          <div className="pt-3 text-lg">
            <p>{props.homeContent.shopDescription}</p>
          </div>
        </div>
        {/* SEND NAME AND DESCRIPTION */}

        {/* START IMAGE */}
        <div className="w-full pt-3">
          <img
            className="rounded-xl w-[100%]"
            src={props.homeContent.shopLogo}
            alt="Shop Logo"
          />
        </div>
        {/* END IMAGE */}
      </div>
      {/* END CONTENT BOX */}
      {/* START MENU */}
      <div className="">
        {/* <FoodMenuList menus={foodMenu} categories="Recommended" /> */}
        <FoodMenuGroup menus={foodMenu} categories={categories} />
      </div>
      {/* END MENU */}
    </div>
  );
};
