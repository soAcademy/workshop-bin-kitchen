import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodMenuList from "../components/FoodMenuList";
import FoodMenuGroup from "../components/FoodMenuGroup";
import CartPopup from "../components/CartPopup";

// return new cart with conditions
// new product push with 1 qty
// existing will add 1
const onUpdateCartItem = (product, quantity, cart, sign, newCart) => {
  console.log("onUpdateCartItem", product, quantity, cart);
  // check if product is exist in cart then increment it's quantity
  const idx = cart.findIndex((r) => r.id === product.id);
  // const newCart = [...cart, { ...product, quantity }];

  if (idx === -1) {
    newCart = [...cart, { ...product, quantity: 1 }];
  } else {
    newCart = [...cart];
    newCart[idx].quantity += sign;
  }
  // newCart[idx].filter((item) => item.quantity > 0);
  // const newCartQuantity = newCart.quantity += quantity; //spread operator - include all the added objects
  return newCart.filter((item) => item.quantity > 0);
};
// console.log("update", onUpdateCartItem);
// console.log("cart", cart)
// console.log("new cart", setCart)

const Home = ({ info }) => {
  const getMenuUrl = process.env.REACT_APP_API_URL + "/get-menus";
  const [menus, setMenus] = useState();
  const [cart, setCart] = useState([]);
  const [toggleCartPopup, setToggleCartPopup] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios.post(getMenuUrl);
      setMenus(result.data);
    };
    fetch();
  }, []);

  console.log("cart", cart);

  useEffect(() => {
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-menus",
    }).then((response) => {
      console.log(response.data);
      setMenus(response.data); //once the data is retrieved, it updates the menus state using setMenus(response.data).
    });
  }, []);

  return (
    <div className="bg-neutral-900 w-full mx-2 rounded-lg shadow-lg border border-8 border-lime-200">
      <div className="flex flex-col m-1 mt-11">
        <div className="md:text-5xl text-3xl m-5 mx-auto text-neutral-50">
          {info.title}
        </div>
      </div>
      <div className="m-3 text-neutral-50 text-justify">{info.intro}</div>
      <img
        src="/thaifood.jpg"
        className="mx-auto sm:w-[600px] sm:h-[300px] w-56 h-32 object-cover rounded-lg"
      ></img>
      <div>
        {/* <FoodMenuList data={menus} setToggleCartPopup={setToggleCartPopup} setCart={setCart} cart={cart} /> */}
        {/* passes the menus state data to it as the data prop. */}
      </div>
      <div>
        <FoodMenuGroup
          setToggleCartPopup={setToggleCartPopup}
          onUpdateCartItem={onUpdateCartItem}
          setCart={setCart}
          cart={cart}
          foodMenus={menus} //passes the menus state data as the foodMenus prop, and a set of unique categories obtained from the menus data as the categories prop.
          categories={[...new Set(menus?.map((r) => r.category))]} //The set of categories is obtained using the map method and the Set object to get only unique values from the category property of each menus item.
        />
      </div>
      <div>
        {toggleCartPopup && (
          <CartPopup
            cart={cart}
            setCart={setCart}
            toggleCartPopup={toggleCartPopup}
            setToggleCartPopup={setToggleCartPopup}
            onUpdateCartItem={onUpdateCartItem}
          />
        )}
      </div>
    </div>
  );
};

export default Home;

//categories={[...new Set(menus?.map((r) => r.category))]}
//The code is using JavaScript destructuring and the spread operator ... to create an array from a unique set of values from a property of objects in an array. Here's what's happening step by step:

// The map method is used to extract the category property of each object in the menus array.

// The new Set constructor is used to create a Set object, which is a collection of unique values.

// The spread operator ... is used to spread the values of the Set object into a new array.
// className="px-1"
