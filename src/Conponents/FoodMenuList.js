const FoodMenuListComponent = (props) => {
  console.log("FoodMenuListComponent", props);
  return (
    <div>
      <div className="font-mono font-bold m-8 ml-10">รายการแนะนำ</div>
      {props.menus?.map((menu) => (
        <div className="flex w-full">
          {/* กล่องสร้างรูป */}
          <div>
            <img
              className="ml-10 h-[120px] w-[160px] mx-auto object-cover mb-5 shadow-lg rounded-lg"
              src={menu.image}
              alt=""
            />
          </div>
          {/* กล่องสร้างชื่อ */}
          <div className="font-mono flex-row w-full ml-12 mt-5">
            <div className="flex-auto ml-10 mb-5 ">{menu.name}</div>
            <div className="text-red flex-auto ml-10">฿{menu.price}</div>
          </div>
          {/* กล่องสร้างปุ่ม */}
          <div className="flex items-center mr-10">
            <button className="font-mono bg-teal-500 shadow-lg shadow-cyan-500/50 shadow-lg rounded-lg w-24 h-8 text-center">เพิ่ม</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FoodMenuListComponent;
