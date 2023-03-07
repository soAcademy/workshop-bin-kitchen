const ListMenu = (props) => {
  // console.log("props",props);
  const { categories, updateCart, menu, setToggle, cart } = props;
  const data = categories.map((category) => {
    return menu.filter((s) => s.categoryName === category);
  });
  // console.log("ListMenu", data);
  // console.log("menu", menu);
  // console.log("categories",categories)
  return (
    <>
      {" "}
      {data.map((r) =>
        r.map((s) => (
          <div className="flex flex-row  h-[100px] bg-transparant p-2  space-x-2  ">
            <div className=" ">
              <img
                className="w-[100px] aspect-[4/3] object-cover rounded-lg shadow-lg shadow-blue-200/100"
                src={s.image}
                alt="Sishuka"
              />
            </div>
            <div className="flex flex-col px-2 w-[150px]">
              <div className=" float-left h-[50px] text-white">{s.name}</div>
              <div className="text-teal-300 font-bold">{s.price}$</div>
            </div>
            <div
              className="bg-teal-300 w-[80px] my-auto p-3 rounded-lg text-center hover:bg-red-400 shadow-lg shadow-yellow-200/100"
              onClick={() => {
                updateCart({
                  quantity: 1,
                  cart: cart,
                  id: s.id,
                  name: s.name,
                  price: s.price,
                  sign: 0,
                });
                setToggle(true);
              }}
            >
              Add
            </div>
          </div>
        ))
      )}
    </>
  );
};
export default ListMenu;
