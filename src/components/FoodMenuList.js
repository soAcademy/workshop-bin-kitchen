import foodMenu from "../data/food-menu.json";

console.log(foodMenu);

const FoodMenuList = () =>
  foodMenu.map((food) => (
    <div className="flex mb-4 gap-4">
      <div>
        <img className="rounded-xl h-[72px]" src={food.image} alt={food.name} />
      </div>
      <div className="flex flex-col">
        <div>{food.name}</div>
        <div className="text-red-600">฿{food.price}</div>
      </div>
      {/* <div>{food.description}</div> */}
    </div>
  ));

export default FoodMenuList;
