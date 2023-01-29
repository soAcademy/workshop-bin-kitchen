import React from "react";

const FoodMenuItem = ({ menu, onAddButtonClicked }) => {
  return (
    <div className="flex p-3 bg-gray-200 mt-3 rounded-lg md:grid grid-cols-1 ">

      {/* START IMAGE */}
      <div className="w-1/3 md:w-full">
        <img
          className="aspect-[4/3] object-cover rounded-xl"
          src={menu.image}
          alt="menu image"
        />
      </div>
      {/* END IMAGE */}

      {/*START NAME AND price */}
      <div className="md:flex-col pl-2 w-3/6 md:w-full md:mt-3">
        <div className="text-md xl:text-xl md:text-md">
          <h1 className="">{menu.name}</h1>
        </div>

        <div className="text-md xl:text-xl md:text-md text-red-500">
          <p>{menu.price} ฿</p>
        </div>
      </div>
      {/* END NAME AND price */}

      {/* START BUTTON */}
      <div
        className="w-1/6 flex flex-col my-auto text-md 
       md:w-auto md:mb-1 md:text-lg 
      "
      >
        <div className="flex justify-center md:mt-3">
          <button
            onClick={() => onAddButtonClicked(menu)}
            className="md:w-full bg-yellow-600  text-white p-4 md:p-3 rounded-xl hover:bg-yellow-700"
          >
            ADD
          </button>
        </div>
      </div>
      {/* END BUTTON */}
    </div>
  );
};

export default FoodMenuItem;
