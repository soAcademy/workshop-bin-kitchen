import FoodMenuList from "./FoodMenuList";
const FoodMenuGroup = ({ menus, categories, setToggleCartPopup, setCart, updateCart, cart}) => {
  // console.log("menus", menus, categories);
  console.log(menus?.filter((menu) => menu.category === "ต้ม"));

  return (
    <div>
      {categories?.map((category, index) => (
        <div key={index}>
          <div className="font-mono font-bold m-8 ml-10">{category}</div>
          <FoodMenuList
            menus={menus?.filter((menu) => menu.category === category)}
            setToggleCartPopup={setToggleCartPopup}
            cart={cart}
            setCart={setCart}
            updateCart={updateCart}
          />
        </div>
      ))}
    </div>
  );
};
export default FoodMenuGroup;