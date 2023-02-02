import { useState } from "react";
// import FoodMenuList from "../components/FoodMenuList";
import FoodMenuGroup from "../components/FoodMenuGroup";
import Hero from "../components/Hero";
import FoodOrderModal from "../components/FoodOrderModal";

export const Home = () => {
  const [cart, setCart] = useState({});
  const [food, setFood] = useState({});
  const [isOrderModalOpen, toggleOrderModal] = useState(false);

  return (
    <div className="px-4 pt-4 font-nstl text-sm">
      <Hero />
      <FoodMenuGroup
        food={food}
        setFood={setFood}
        isOrderModalOpen={isOrderModalOpen}
        toggleOrderModal={toggleOrderModal}
      />
      <FoodOrderModal
        food={food}
        cart={cart}
        setCart={setCart}
        isOrderModalOpen={isOrderModalOpen}
        toggleOrderModal={toggleOrderModal}
      />
    </div>
  );
};
