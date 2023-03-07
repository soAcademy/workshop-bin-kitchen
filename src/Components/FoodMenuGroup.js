import FoodMenuList from "./FoodMenuList";

const FoodMenuGroup = (props) => {
  console.log("props", props);
  //   const [categories, foodMenus, toggleCartPopup, setToggleCartPopup] = props;
  //   console.log("foodMenus", foodMenus);

  // const FoodMenuGroup = ({ foodMenus, categories }) => {

  const { cart, toggleCartPopup, setCart, setToggleCartPopup, foodMenus } =
    props;

  return props.categories?.map((category) => (
    <>
      <div className="ml-4 mt-4 font-bold">{`รายการ${category}`}</div>
      <FoodMenuList
        cart={cart}
        setCart={setCart}
        category={category}
        foodMenus={foodMenus.filter((r) => r.categoryName === category)}
        toggleCartPopup={toggleCartPopup}
        setToggleCartPopup={setToggleCartPopup}
      />
    </>
  ));
};

export default FoodMenuGroup;
