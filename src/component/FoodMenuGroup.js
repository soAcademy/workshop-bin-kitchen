import FoodList from "../component/FoodList";
const FoodMenuGroup = (props,className) => {
  console.log("FoodMenu props", props);
  return props.categories?.map((r) => {
    return (
      <FoodList
      foodListData={props.foodAllData.filter((s) => s.category === r)}
      category3={r}
      />
    );
  });
};
export default FoodMenuGroup;
