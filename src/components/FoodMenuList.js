const FoodMenuList = (props) => {
  return (
    <div>
      <h1 className="text-bold text-sky-500 p-2 text-3xl">{props.category}</h1>
      {props?.data?.map((r) => {
        return (
          <div className="flex">
            <img src={r.image} className="h-[150px] w-[200px] rounded-lg p-2"></img>
            <div>
              <div>{r.name}</div>
              <div>{r.price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodMenuList;