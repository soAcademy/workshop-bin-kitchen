const FoodMenuList = (props) => {
  return (
    <div>
      <h1 className="text-bold text-sky-500 p-2 text-3xl">{props.category}</h1>
      {props?.foodMenus?.map((r) => {
        return (
          <div className="flex">
            <img
              src={r.image}
              className="h-[150px] w-[200px] rounded-lg p-2"
            ></img>
            <div className="flex-auto">
              <div className="text-2xl">{r.name}</div>
              <div className="text-xl">{r.price}</div>
              
            </div>
            <div>
              <button className="text-xl button bg-red-200 active:bg-red-400 px-4 py-2 rounded-lg mr-2">Add</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodMenuList;
