const TestManusList = (props) => {
  return (
    <div>
      <div className="flex">
        <div className="w-2/6 mt-3.5">
          <img
            src={props.data.image}
            className="w-[80px] rounded-lg"
          />
        </div>
        <div className="w-4=3/6 pl-8 mt-3.5">
          <p className="text-sm">{props.data.name}</p>
          <p className="text-sm text-red-500 mt-4">฿{props.data.price}</p>
        </div>
        <div className="flex w-1/6 items-center">
          <button className="border-2 rounded-lg bg-orange-200 p-3">
            เพิ่ม
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestManusList;
