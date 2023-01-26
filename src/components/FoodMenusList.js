const TestManusList = (props) => {
  return (
    <div>
      <div className="flex m-2">
        <div className="w-1/6">
          <img
            src={props.data.image}
            alt="img"
            className="w-[80px] rounded-lg"
          />
        </div>
        <div className="w-3/6 pl-8 mt-3.5">
          <p className="text-sm">{props.data.name}</p>
          <p className="text-sm text-red-500 mt-3">฿{props.data.price}</p>
        </div>
        <div className="flex w-2/6 justify-end">
          <button className="rounded-lg bg-red-100 px-10">เพิ่ม</button>
        </div>
      </div>
    </div>
  );
};

export default TestManusList;
