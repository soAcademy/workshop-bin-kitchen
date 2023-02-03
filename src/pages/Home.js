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
            // console.log("matched");
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
    //   props.setCart({
    //     table_id: Number(tableId),
    //     items: [
    //       {
    //         menu_id: food.id,
    //         price: food.price,
    //         quantity: Number(quantity),
    //         total_price: food.price * quantity,
    //       },
    //     ],
    //   });
    // } else {
    //   const updatedItems = [...props.cart.items];
    //   console.log(updatedItems);

    //   updatedItems.reduce((acc, item) => {
    //     console.log(item.menu_id);
    //     console.log(food.id);
    //     if (item.menu_id === food.id) {
    //       acc.push({
    //         menu_id: food.id,
    //         price: food.price,
    //         quantity: item.quantity + Number(quantity),
    //         total_price: item.price + food.price * quantity,
    //       });
    //       // item.quantity += Number(quantity);
    //       // item.price += food.price * quantity;
    //     } else {
    //       // acc.push({
    //       //   menu_id: food.id,
    //       //   price: food.price,
    //       //   quantity: Number(quantity),
    //       //   total_price: food.price * quantity,
    //       // });
    //       acc.push(item);
    //       console.log(acc);
    //     }
    //     return [...acc, item];
    //   }, []);

    //   console.log(updatedItems);

    //   const updatedCart = {
    //     table_id: Number(tableId),
    //     // items: [
    //     //   {
    //     //     menu_id: food.id,
    //     //     price: food.price,
    //     //     quantity: Number(quantity),
    //     //     total_price: food.price * quantity,
    //     //   },
    //     // ],
    //     items: updatedItems,
    //   };

    //   props.setCart(updatedCart);
    // }

    // axios({
    //   method: "post",
    //   maxBodyLength: Infinity,
    //   url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/create-order",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: updatedCart,
    // }).then((response) => {
    //   // console.log(response.data);
    //   props.toggleOrderModal(!props.isOrderModalOpen);
    // });
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
