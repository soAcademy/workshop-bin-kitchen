const MenuList = ({ category, foodMenus }) => (
  <>
    <h1>{category}</h1>
    {foodMenus?.map((menu) => (
      <div className="flex mb-4">
        <img src={menu.image} className="object-cover w-10 h-10 rounded-lg" />
        <div className="ml-2 flex-auto">
          {menu.name}
          <p className="text-red-500 text-sm">฿{menu.price}</p>
        </div>
        <div className="ml-2 ">
          <button className="button bg-gradient-to-r 
                    from-red-400 to-yellow-400 active:bg-purple-400 px-4 py-2 rounded-lg ml-2">
            Add
          </button>
        </div>
      </div>
    ))}
  </>
);

export default MenuList;
