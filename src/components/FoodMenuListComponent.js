import React from "react";

const FoodMenuList = ({ menus , category}) => {

  return (
    <>
      {/* START MENU BOX */}
      <div className="mt-3">
        <h1 className="text-md md:text-lg lg:text-xl xl:text-2xl">{`เมนู${category}`}</h1> 
        {menus?.map((menu) => (
          <div className="flex p-3 bg-gray-100 mt-3 rounded-lg">
            {/* START IMAGE */}
            <div className="w-1/3">
              <img className="rounded-xl" src={menu.image} alt="menu image" />
            </div>
            {/* END IMAGE */}
            {/*START NAME AND price */}
            <div className="pl-2 w-3/6">
              <div className="text-md md:text-lg lg:text-xl xl:text-2xl">
                <h1 className="">{menu.name}</h1>
              </div><br />
              <div className="text-md md:text-lg lg:text-xl xl:text-2xl text-red-500">
                <p>{menu.price} ฿</p>
              </div>
            </div>
            {/* END NAME AND price */}
            {/* START BUTTON */}
            <div className="w-1/6 flex flex-col items-center my-auto text-md md:text-lg lg:text-xl xl:text-2xl">
              <button className="p-3 bg-pink-200 rounded-lg">ADD</button>
            </div>
            {/* END BUTTON */}
            </div>
        ))}
      </div>
      {/* END MENU BOX */}
    </>
  );
};

export default FoodMenuList;
