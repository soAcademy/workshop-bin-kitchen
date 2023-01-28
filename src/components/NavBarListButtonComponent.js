import React from 'react'


const NavBarListButton = (props) => {
  return (
    <button className='bg-yellow-600 text-white py-3 px-10 rounded-full md:ml-8 hover:bg-yellow-800 duration-500'>
{props.children}
    </button>
  )
}

export default NavBarListButton;