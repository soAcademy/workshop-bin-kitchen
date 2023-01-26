import FoodMenuList from "./FoodMenuList";

const FoodMenuGroup = ({ foodMenus, categories }) => {
  return (
    <div>
      {categories?.map((category) => (
        <FoodMenuList
          category={category}
          foodMenus={foodMenus.filter((r) => r.category === category)}
        />
      ))}
    </div>
  );
};

export default FoodMenuGroup;
