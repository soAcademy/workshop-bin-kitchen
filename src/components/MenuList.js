const MenuList = ({ menu }) => (
  <div className="flex mb-4">
    <img src={menu.image} className="object-cover w-20 h-20 rounded-lg" />
    <div className="ml-2 flex-auto">
      {menu.name}
      <p className="text-red-500 text-sm">฿{menu.price}</p>
    </div>
    <div className="ml-2 ">
      <button className="button bg-red-200 active:bg-red-400 px-4 py-2 rounded-lg ml-2">
        เพิ่ม
      </button>
    </div>
  </div>
);

export default MenuList;
