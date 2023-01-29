import React from 'react'
import MenuListAddButton from './FoodMenuListAddButton'

const ShopTable = () => {
  const tableNumbers =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  return (
    <div className="pt-4 grid grid-cols-4 grid-flow-row gap-4">
      {tableNumbers.map(tableNumber => (
        <button className="w-auto h-[70px] 
        bg-yellow-600 
        text-xl 
        rounded-xl 
        hover:border-2 
        border-black">{tableNumber}</button>
      ))}
    </div>
  )
}

export default ShopTable