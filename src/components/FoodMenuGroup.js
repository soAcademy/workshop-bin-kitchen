import FoodMenuList from "./FoodMenuList";

const FoodMenuGroup = (props) => 
  props.categories?.map((category) => (
    <FoodMenuList
      category={category}
      foodMenus={props.foodMenus.filter((r) => r.category === category)}
  />
  ))

  export default FoodMenuGroup;
