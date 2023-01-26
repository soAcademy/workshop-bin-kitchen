import MenuList from "./FoodMenulist";

const FoodMenuGroup = ({ foodMenus, categories }) =>
  categories?.map((category) => (
    <MenuList
      category={category}
      foodMenus={foodMenus.filter((r) => r.category === category)}
    />
  ));

  export default FoodMenuGroup;
