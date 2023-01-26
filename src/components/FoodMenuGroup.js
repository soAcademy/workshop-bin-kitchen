import TestMenusList from "./FoodMenusList";

const FoodMenuGroup = (props) => {
  // console.log(props.category);
  // console.log(props.foodMenus);
  const test = props.foodMenus.filter((r) => r.category === props.category);
  // console.log(test);
  return (
    <>
      <p className="mb-3.5">เมนู{props.category}</p>
      {test.map((r, idx) => (
        <TestMenusList key={idx} data={r} />
      ))}
    </>
  );
};

export default FoodMenuGroup;
