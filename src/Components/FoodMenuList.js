const FoodMenuListComponent = (props) => {
  console.log("FoodMenuListComponent", props);
  return (
    <>
      <div className="font-bold">รายการแนะนำ</div>
      {props.menus.map((menu) => (
        <div className="flex w-full">
          <div>
            <img
              className="mt-1 h-[60px] mx-auto object-cover"
              src={menu.image}
              alt=""
            />
          </div>
          <div className="flex-auto">{menu.name}</div>
          <div>
            <button>เพิ่ม</button>
          </div>
        </div>
      ))}
    </>
  );
};
export default FoodMenuListComponent;
