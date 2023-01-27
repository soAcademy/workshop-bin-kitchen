import { useEffect, useState } from "react";
import axios from "axios";

const FoodData = () => {
  const [foodMenu, setFoodMenu] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
    }).then((res) => {
      setFoodMenu(res.data);
    });
  }, []);
  return foodMenu;
};

export default FoodData;
