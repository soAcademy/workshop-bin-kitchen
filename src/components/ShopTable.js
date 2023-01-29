import React from 'react'

const ShopTable = () => {
  const tableNumbers =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  return (
    <div className="pt-4 grid grid-flow-row grid-cols-3 gap-5 
    sm:grid-cols-4 
    md:grid-cols-5 
    lg:grid-cols-6 
    xl:grid-cols-7 
    2xl:grid-cols-8">
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