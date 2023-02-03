import { useState } from "react";
// import FoodMenuList from "../components/FoodMenuList";
import FoodMenuGroup from "../components/FoodMenuGroup";
import Hero from "../components/Hero";
import FoodOrderModal from "../components/FoodOrderModal";

export const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [food, setFood] = useState({});
  const [isOrderModalOpen, toggleOrderModal] = useState(false);

  const updateCartItems = (cartItems, food, quantity) => {
    if (cartItems.some((item) => item.menu_id === food.id)) {
      setCartItems(
        cartItems.reduce((acc, item) => {
          if (item.menu_id === food.id) {
            acc.push({
              menu_id: food.id,
              name: food.name,
              price: food.price,
              quantity: item.quantity + Number(quantity),
              total_price: item.total_price + food.price * Number(quantity),
            });
          } else {
            acc.push(item);
          }
          return acc;
        }, [])
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          menu_id: food.id,
          name: food.name,
          price: food.price,
          quantity: Number(quantity),
          total_price: food.price * quantity,
        },
      ]);
    }
  };

  return (
    <div className="px-4 pt-4 font-nstl text-sm">
      <Hero />
      <FoodMenuGroup
        food={food}
        setFood={setFood}
        isOrderModalOpen={isOrderModalOpen}
        toggleOrderModal={toggleOrderModal}
        cartItems={cartItems}
        updateCartItems={updateCartItems}
      />
      <FoodOrderModal
        food={food}
        isOrderModalOpen={isOrderModalOpen}
        toggleOrderModal={toggleOrderModal}
        cartItems={cartItems}
        setCartItems={setCartItems}
        updateCartItems={updateCartItems}
      />
    </div>
  );
};
