const FoodMenuList = (props) => {
  const {
    menu,
    category,
    setFood,
    toggleOrderModal,
    isOrderModalOpen,
    cartItems,
    updateCartItems,
  } = props;

  return (
    <div className="mb-4 grid gap-4 md:grid-cols-2">
      {menu
        .filter((menuItem) => menuItem.category.name === category)
        .map((menuItem, idx) => (
          <div key={idx} className="flex gap-4">
            <img
              className="h-[72px] w-[72px] rounded-[10px] object-cover"
              src={menuItem.image}
              alt={menuItem.name}
            />
            <div className="flex flex-auto flex-col">
              <div className="flex-auto">{menuItem.name}</div>
              <div className="text-red-600">฿{menuItem.price}</div>
            </div>
            <button
              onClick={() => {
                setFood(menuItem);
                updateCartItems(cartItems, menuItem, 1);
                toggleOrderModal(!isOrderModalOpen);
              }}
              className="self-center rounded-[10px] bg-red-200 px-6 py-3 hover:bg-red-300"
            >
              เพิ่ม
            </button>
          </div>
        ))}
    </div>
  );
};

export default FoodMenuList;
