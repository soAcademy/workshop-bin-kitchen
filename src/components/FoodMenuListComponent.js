import React from "react";
import { datakitchenboeing } from "../datakitchen";

const FoodMenuListComponent = (props) => {
  const { foodMenus, category, addFoodOrder } = props;

  return (
    <>
      <div className="ml-4 mr-4">
        <div className="flex items-center  my-3 bg-rose-300 text-white p-3 md:p-7">
          <h2 className=" text-xl ml-4 mr-3  md:text-4xl md:text-center md:font-semibold">
            {`เมนู${category}`}
          </h2>
          <img src={datakitchenboeing.egg_icon} />
        </div>
        {foodMenus?.map((menu) => (
          <div
            key={menu.id}
            className="flex bg-rose-50 mt-2 h-[150px] md:h-fit md:p-3 "
          >
            <div className="w-1/3 m-2">
              <img
                className="w-[100%] aspect-square object-cover rounded-[10px]"
                src={menu.image}
              />
            </div>
            <div className="flex flex-col w-1/2 pl-4 md:my-8 md:mx-4">
              <h2 className="my-2 md:text-3xl md:mb-6">{menu.name}</h2>
              <h2 className="text-red-600 md:text-3xl">{menu.price} ฿</h2>
            </div>
            <div className="flex flex-col items-center my-auto mr-4">
              <button
                onClick={addFoodOrder}
                className="bg-rose-400 text-white px-3 rounded-[10px] md:p-6 md:text-3xl"
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
