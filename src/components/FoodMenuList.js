import foodMenu from "../data/food-menu.json";

const FoodMenuList = () =>
  foodMenu.map((food) => (
    <div className="flex mb-4 gap-4">
      <img
        className="rounded-xl w-[72px] h-[72px] object-cover"
        src={food.image}
        alt={food.name}
      />
      <div className="flex flex-col">
        <div className="flex-auto">{food.name}</div>
        <div className="text-red-600">฿{food.price}</div>
      </div>
      {/* <div>{food.description}</div> */}
    </div>
  ));

export default FoodMenuList;
