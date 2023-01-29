import { useState } from "react";
// import FoodMenuList from "../components/FoodMenuList";
import FoodMenuGroup from "../components/FoodMenuGroup";
import Hero from "../components/Hero";
import FoodOrderModal from "../components/FoodOrderModal";

export const Home = () => {
  const [foodOrder, setFoodOrder] = useState("");

  return (
    <div className="px-4 pt-4 font-nstl text-sm">
      <Hero />
      <FoodMenuGroup setFoodOrder={setFoodOrder} />
      <FoodOrderModal foodOrder={foodOrder} />
    </div>
  );
};
