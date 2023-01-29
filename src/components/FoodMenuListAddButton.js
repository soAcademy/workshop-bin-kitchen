import React from 'react'

const MenuListAddButton = (props) => {
  return (
    <div className="flex justify-center">
      <button className="md:w-full bg-yellow-600  text-white p-4 md:px-2 rounded-xl hover:bg-yellow-700">{props.children}</button>
    </div>
  )
}

export default MenuListAddButton;