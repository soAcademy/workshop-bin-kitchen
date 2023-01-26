import FoodMenusList from "../Components/FoodMenusList";

const FoodMenusCategory = (props) => {
  // console.log(props);

  return (
    <div className="mb-8">
      <div className="menuType mb-4">
        <p>{props.type}</p>
      </div>
      {props.foodMenus
        .filter((menu) => menu.category === props.type)
        .map((filtered, idx) => (
          <FoodMenusList key={idx} data={filtered} />
        ))}
    </div>
  );
};

export default FoodMenusCategory;
