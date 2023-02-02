import FoodMenuList from "./FoodMenuList";

const FoodMenuGroup = ({ foodMenus, categories, addItem }) => {
  return (
    <div>
      {categories?.map((category) => (
        <FoodMenuList
          category={category}
          foodMenus={foodMenus.filter((r) => r.category === category)}
          addItem={addItem}
        />

      ))}
    </div>
  );
};

export default FoodMenuGroup;
