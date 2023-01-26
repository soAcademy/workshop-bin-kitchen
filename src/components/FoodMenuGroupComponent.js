import React from 'react'
import FoodMenuList from "../components/FoodMenuListComponent";

const FoodMenuGroup = ({ menus , categories}) => {
// console.log("menus",menus,"categories",categories);
  return (
    <div>
    {categories?.map(category=>(
      <FoodMenuList menus={menus?.filter((menu)=>menu.category===category)} category={category}/>
    ))}
    </div>
  )
}

export default FoodMenuGroup;