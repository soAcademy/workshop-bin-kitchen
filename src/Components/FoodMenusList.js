const FoodMenusList = (props) => {
  // console.log(props);

  return (
    <div className="menuCard flex mb-2">
      <div className="menuImage w-2/6">
        <img className="w-[90px] rounded-lg" src={props.data.image} alt="" />
      </div>
      <div className="menuDetail w-3/6">
        <div className="menuName mb-3">
          <p>{props.data.name}</p>
        </div>
        <div className="menuPrice">
          <p className="text-red-400">฿{props.data.price}</p>
        </div>
      </div>
      <div className="menuBtn flex items-center w-1/6">
        <button className="w-full bg-red-100 active:bg-red-200 rounded-md p-2">เพิ่ม</button>
      </div>
    </div>
  );
};

export default FoodMenusList;
