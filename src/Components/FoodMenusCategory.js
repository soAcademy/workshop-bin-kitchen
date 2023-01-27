import FoodMenusList from "../Components/FoodMenusList";

const FoodMenusCategory = (props) => {
  // console.log(props);

  return (
    <div className="mb-8 md:mb-0">
      <div className="menuType mb-4">
        <p className="font-bold">{props.type}</p>
      </div>
      <div className="flex flex-col gap-2">
        {props.foodMenus
          .filter((menu) => menu.category === props.type)
          .map((filtered, idx) => (
            <FoodMenusList key={idx} data={filtered} />
          ))}
      </div>
    </div>
  );
};

export default FoodMenusCategory;
