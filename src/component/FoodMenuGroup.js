import FoodList from "../component/FoodList";
const FoodMenuGroup = (props) => {
  console.log("FoodMenu props", props);
  const {menu,setCart,addCart,categories} = props;
  return categories?.map((r) => {
    return (
      <FoodList 
      menuGroup={menu.filter((s) => s.category === r)}
      categories={r}  
      setCart={setCart}
      addCart={addCart}
    

      />
    );
  });
  
};
export default FoodMenuGroup;
