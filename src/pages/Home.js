import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodMenuList from "../components/FoodMenuList";
import FoodMenuGroup from "../components/FoodMenuGroup";
const Home = ({ info }) => {
  const [menus, setMenus] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
    }).then((response) => {
      console.log(response.data);
      setMenus(response.data);
    });
  }, []);

  return (
    <div className="bg-green-200 w-full mx-2">
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
        <FoodMenuList data={menus} />
      </div>
      <div>
        <FoodMenuGroup
          foodMenus={menus}
          categories={[...new Set(menus?.map((r) => r.category))]}
        />
      </div>
    </div>
  );
};

export default Home;
