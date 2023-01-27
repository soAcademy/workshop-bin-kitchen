const FoodMenusList = (props) => {
  // console.log(props);

  return (
    <div className="menuCard flex gap-x-4 rounded-lg hover:bg-gray-100 p-2">
      <div className="w-5/6 flex gap-x-4">
        <div className="menuImage w-2/6">
          <img
            className="w-[90px] md:w-full rounded-lg"
            src={props.data.image}
            alt=""
          />
        </div>
        <div className="menuDetail h-100 flex flex-col w-4/6">
          <div className="menuName h-1/2">
            <p>{props.data.name}</p>
          </div>
          <div className="menuPrice h-1/2 flex items-end">
            <div>
              <p className="text-red-400">฿{props.data.price}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="menuBtn flex items-center w-1/6">
        <button className="w-full bg-red-100 active:bg-red-200 rounded-md p-2">
          เพิ่ม
        </button>
      </div>
    </div>
  );
};

export default FoodMenusList;
