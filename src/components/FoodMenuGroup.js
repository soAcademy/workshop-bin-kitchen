import MenuList from "./MenuList";

// const FoodMenuGroup = ({ foodMenus, categories }) => (
//   <div>
//     {categories?.map((category) => (
//       <MenuList
//         category={category}
//         foodMenus={foodMenus.filter((r) => r.category === category)}
//       />
//     ))}
//     ;
//   </div>
// );

const FoodMenuGroup = (props) => {
  console.log("props_FoodMenuGroup", props);
  const {
    categories,
    foodMenus,
    setToggleCartPopup,
    updateCart,
    cart,
    setCart,
  } = props;
  return (
    <div>
      {categories?.map((category) => (
        <MenuList
          category={category}
          foodMenus={foodMenus.filter((r) => r.category === category)}
          setToggleCartPopup={setToggleCartPopup}
          updateCart={updateCart}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );

};

export default FoodMenuGroup;
