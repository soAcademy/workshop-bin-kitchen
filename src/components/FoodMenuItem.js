import React from 'react'
import MenuListAddButton from './FoodMenuListAddButton'

const FoodMenuItem = ({ menu }) => {
  return (
    <div className="flex p-3 bg-gray-200 mt-3 rounded-lg">
            {/* START IMAGE */}
            <div className="w-1/3">
              <img className="rounded-xl" src={menu.image} alt="menu image" />
            </div>
            {/* END IMAGE */}
            {/*START NAME AND price */}
            <div className="pl-2 w-3/6">
              <div className="text-md md:text-lg lg:text-xl xl:text-2xl">
                <h1 className="">{menu.name}</h1>
              </div>
              <br />
              <div className="text-md md:text-lg lg:text-xl xl:text-2xl text-red-500">
                <p>{menu.price} ฿</p>
              </div>
            </div>
            {/* END NAME AND price */}
            {/* START BUTTON */}
            <div className="w-1/6 flex flex-col items-center my-auto text-md md:text-lg lg:text-xl xl:text-2xl">
              {/* <button className="p-3 bg-pink-200 rounded-lg">ADD</button> */}
              <MenuListAddButton />
            </div>
            {/* END BUTTON */}
          </div>
  )
}

export default FoodMenuItem