const FoodList = (props) => {
  return (
    <div>
      <h1 className="bg-red-200 w-[100px] text-center p-1 rounded-lg font-bold shadow-lg shadow-yellow-500/20">เมนู{props.category3}</h1>
      <div className="grid md:grid-cols-2">
        {props.foodListData?.map((r) => (
          <div className="flex justify-between m-2 flex items-center w-[350px] md:w-[500px] ">
            <div className="">
              <img
                className="h-[50px] w-[50px] rounded-lg md:h-[100px] md:w-[100px]"
                src={r.image}
              ></img>
            </div>
            <div className=" w-1/3 ">
              {r.name}
              <br />
              <p className="font-bold text-left text-red-400">{r.price}</p>
            </div>
            <div className="grid justify-items-end w-1/3 mr-1">
              <button className="bg-red-200 p-1 rounded-lg hover:shadow-lg shadow-indigo-500/50 hover:bg-teal-200 md:w-[80px]">
                เพิ่ม
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FoodList;
