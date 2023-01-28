import React from "react";

const FoodMenuListComponent = (props) => {
  const { foodMenus, category, addFoodOrder } = props;

  return (
    <>
      <div className="ml-4 mr-4">
        <h2 className="my-3 bg-rose-300 text-white p-3 text-lg">{`เมนู${category}`}</h2>
        {foodMenus?.map((menu) => (
          <div key={menu.id} className="flex bg-rose-50 mt-2 h-[150px] ">
            <div className="w-1/3 m-2">
              <img
                className="w-[100%] aspect-square object-cover rounded-[10px]"
                src={menu.image}
              />
            </div>
            <div className="flex flex-col w-1/2 pl-4">
              <h2 className="my-2">{menu.name}</h2>
              <h2 className="text-red-600">{menu.price} ฿</h2>
            </div>
            <div className="flex flex-col items-center my-auto mr-4">
              <button
                onClick={addFoodOrder}
                className="bg-rose-400 text-white px-3 rounded-[10px]"
              >
                เพิ่ม
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodMenuListComponent;
