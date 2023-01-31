import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodMenuList from "../components/FoodMenuList";
import FoodMenuGroup from "../components/FoodMenuGroup";
import CartPopup from "../components/CartPopup";
const Home = ({ info }) => {
  const [menus, setMenus] = useState();
  const [cart, setCart] = useState([]);
  const [toggleCartPopup, setToggleCartPopup] = useState(false);

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
        {/* <FoodMenuList data={menus} setToggleCartPopup={setToggleCartPopup} /> */}
        {/* passes the menus state data to it as the data prop. */}
      </div>
      <div>
        <FoodMenuGroup
          setToggleCartPopup={setToggleCartPopup}
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
