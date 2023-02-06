// const MenuList = ({ foodMenus, category }) => (
//   <>
//     <h4 className="mt-4 mb-2 font-bold underline">{category}</h4>
//     {foodMenus?.map((menu) => (
//       <div className="flex mb-4">
//         <img src={menu.image} className="object-cover w-20 h-20 rounded-lg" />
//         <div className="ml-2 flex-auto">
//           {menu.name}
//           <p className="text-red-500 text-sm">฿{menu.price}</p>
//         </div>
//         <div className="ml-2 ">
//           <button className="button bg-red-200 active:bg-red-400 px-4 py-2 rounded-lg ml-2">
//             เพิ่ม
//           </button>
//         </div>
//       </div>
//     ))}
//   </>
// );

// export default MenuList;

const MenuList = (props) => {
  console.log("props_menulist", props);
  const {
    category,
    className,
    foodMenus,
    setToggleCartPopup,
    updateCart,
    cart,
    setCart,
  } = props;
  return (
    <div className={className}>
      <h4 className="mt-4 mb-2 font-bold underline">{category}</h4>
      {foodMenus?.map((menu) => (
        <div className="flex mb-4">
          <img src={menu.image} className="object-cover w-20 h-20 rounded-lg" />
          <div className="ml-2 flex-auto">
            {menu.name}
            <p className="text-red-500 text-sm">฿{menu.price}</p>
          </div>
          <div className="ml-2 ">
            <button
              className="button bg-red-200 active:bg-red-400 px-4 py-2 rounded-lg ml-2"
              onClick={() => {
                setToggleCartPopup(true);
                setCart(
                  updateCart({
                    sign: 1,
                    cart,
                    id: menu.id,
                    name: menu.name,
                    price: menu.price,
                  })
                );
              }}
            >
              เพิ่ม
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
