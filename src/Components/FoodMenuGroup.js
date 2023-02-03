import FoodMenuList from "./FoodMenuList";

const FoodMenuGroup = (props) => {
  console.log("props", props);
  //   const [categories, foodMenus, toggleCartPopup, setToggleCartPopup] = props;
  //   console.log("foodMenus", foodMenus);

  // const FoodMenuGroup = ({ foodMenus, categories }) => {
  return props.categories?.map((category) => (
    <>
      <div className="ml-4 mt-4 font-bold">{`รายการ${category}`}</div>
      <FoodMenuList
        cart={props.cart}
        setCart={props.setCart}
        category={category}
        foodMenus={props.foodMenus.filter((r) => r.category === category)}
        toggleCartPopup={props.toggleCartPopup}
        setToggleCartPopup={props.setToggleCartPopup}
      />
    </>
  ));
};

export default FoodMenuGroup;
