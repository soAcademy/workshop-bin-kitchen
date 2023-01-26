const FoodMenuList = (props) => {
  // console.log("mockData", props);
  return (
    <div>
      <h1>{props.category}</h1>
      {props.foodMenus.map((r) => {
        //เปลี่ยน data => foodMenus
        return (
          <div className="flex justify-between m-5">
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
              <button className="border rounded-lg border-1 bg-red-100 px-5 py-2">Add</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodMenuList;
