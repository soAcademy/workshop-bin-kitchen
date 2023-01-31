import FoodMenuList from "./FoodMenuList";

const FoodMenuGroup = (props) => {
  // <div className={props.className}>
  const { cart, setCart, toggleCartPopup, setToggleCartPopup } = props;
  return props.categories?.map((category) => (
    <FoodMenuList
    setToggleCartPopup={setToggleCartPopup}
      category={category}
      foodMenus={props.foodMenus.filter((r) => r.category === category)}
    />
  ));
  // </div>
};

export default FoodMenuGroup;
