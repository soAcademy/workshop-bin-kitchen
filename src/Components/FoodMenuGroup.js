import FoodMenuList from "./FoodMenuList";

const FoodMenuGroup = ({ categories, foodMenus }) => {
  return categories?.map((category) => (
    <>
      <div className="ml-4 mt-4 font-bold">{`รายการ${category}`}</div>
      <FoodMenuList
        category={category}
        props={foodMenus.filter((r) => r.category === category)}
      />
    </>
  ));
};

export default FoodMenuGroup;
