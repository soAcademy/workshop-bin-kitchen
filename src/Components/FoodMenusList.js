const FoodMenusList = ({ menuData, addBtnFunc }) => {
  // console.log(menuData);

  return (
    <div className="menuCard flex gap-x-4 rounded-lg hover:bg-gray-100 p-2">
      <div className="w-5/6 flex gap-x-4">
        <div className="menuImage w-2/6 flex items-center aspect-[4/3]">
          <img
            className="w-full max-h-20 object-cover h-full rounded-lg"
            src={menuData.image}
            alt=""
          />
        </div>
        <div className="menuDetail h-100 flex flex-col w-4/6">
          <div className="menuName h-1/2">
            <p>{menuData.name}</p>
          </div>
          <div className="menuPrice h-1/2 flex items-end">
            <div>
              <p className="text-red-400">฿{menuData.price}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="menuBtn flex items-center w-1/6">
        <button
          onClick={() => addBtnFunc(menuData)}
          className="w-full h-10 bg-red-100 active:bg-red-200 rounded-md"
        >
          เพิ่ม
        </button>
      </div>
    </div>
  );
};

export default FoodMenusList;
