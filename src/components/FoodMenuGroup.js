import FoodMenuList from "./FoodMenuList";

const FoodMenuGroup = (props) => {
  // <div className={props.className}>

  return props.categories?.map((category) => (
    <FoodMenuList
      category={category}
      foodMenus={props.foodMenus.filter((r) => r.category === category)}
    />
  ));
  // </div>
};

export default FoodMenuGroup;
