const FoodMenuList = (props) => {
  // console.log("mockData", props);
  return (
    <div>
      <h1 className="ml-5">เมนู{props.category}</h1>
      {props.foodMenus.map((r) => {
        //เปลี่ยน data => foodMenus
        return (
          <div className="flex justify-between items-center m-5">
            <div className="flex">
              <div>
                <img className="w-[70px] rounded-lg" src={r.image} />
              </div>
              <div>
                <div className="ml-10">{r.name}</div>
                <div className="ml-10">{r.price}</div>
              </div>
            </div>
            <div>
              <button className="uppercase text-center border-1 bg-slate-200 px-5 py-2 text-red-600 rounded-lg font-semibold">
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodMenuList;
