import React from "react";

const FoodMenuListComponent = (props) => {
  const { foodMenus, category } = props;

  return (
    <>
      <div className="ml-4 mr-4">
        <h2 className="my-3">{`เมนู${category}`}</h2>
        {foodMenus?.map((menu) => (
          <div className="flex bg-gray-50 mt-2 ">
            <div className="w-1/3 m-2">
              <img className="w-[100%]" src={menu.image} />
            </div>
            <div className="flex flex-col w-1/2 pl-4">
              <h2 className="my-2">{menu.name}</h2>
              <h2 className="text-red-600">{menu.price} ฿</h2>
            </div>
            <div className="flex flex-col items-center my-auto">
              <button className="bg-red-200 px-3">เพิ่ม</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodMenuListComponent;
