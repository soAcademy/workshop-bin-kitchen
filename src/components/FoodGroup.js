import FoodMenuList from "./FoodMenuList";

const FoodMenuGroup = ({ foodMenus, categories, addItem }) => {
  console.log("foodMenus",foodMenus)
  console.log("categories",categories)
  console.log("addItem",addItem)

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

// console.log("FoodMenuGroup:",FoodMenuGroup)
export default FoodMenuGroup;
