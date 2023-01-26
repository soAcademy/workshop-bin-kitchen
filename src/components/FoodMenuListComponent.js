import React from "react";

const FoodMenuListComponent = (props) => {
  const { foodMenus } = props;

  return (
    <div className="mx-7">
      <h2 className="my-3">รายการแนะนำ</h2>
      {foodMenus.map((menu) => (
        <div className="flex my-3">
          <div className="w-[100px] h-[100px]">
            <img className="w-[100%] h-[100%]" src={menu.image} />
          </div>
          <div className="flex flex-col pl-3">
            <h2 className="my-2">{menu.name}</h2>
            <h2 className="text-red-600">{menu.price} bath</h2>
          </div>
          <div className="ml-6 my-3">
            <button className="bg-red-200 px-3 py-[5px]">เพิ่ม</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodMenuListComponent;
