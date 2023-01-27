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
    <div className="bg-slate-100 w-full mx-2 rounded-lg shadow-lg border border-8 border-lime-200">
      <div className="flex flex-col m-1 mt-11">
        <div className="md:text-5xl text-3xl m-5 mx-auto">{info.title}</div>
      </div>
      <div className="m-3">{info.intro}</div>
      <img
        src="/thaifood.jpg"
        className="mx-auto sm:w-[600px] sm:h-[300px] w-56 h-32 object-cover rounded-lg"
      ></img>
      <div>
        <FoodMenuList data={menus} />
      </div>
      <div>
        <FoodMenuGroup
          foodMenus={menus}
          categories={[...new Set(menus?.map((r) => r.category))]}
          // className="px-1"
        />
      </div>
    </div>
  );
};

export default Home;
