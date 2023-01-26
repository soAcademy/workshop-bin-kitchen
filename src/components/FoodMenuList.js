const FoodMenuList = (props) => {
  console.log("mockData", props);
  return (
    <div>
      <h1>{props.category}</h1>
      {props.data.map((r) => {
        return (
          <div className="flex m-5">
            <div>
              <img className="w-[70px] rounded-full" src={r.image} />
            </div>
            <div>
              <div className="ml-10">{r.name}</div>
              <div className="ml-10">{r.price}</div>
            </div>
            <div className="ml-60">
              <button>Add</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodMenuList;
