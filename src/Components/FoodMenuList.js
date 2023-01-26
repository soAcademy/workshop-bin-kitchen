const FoodMenuList = ({ props, category }) => {
  console.log(props);

  return props
    .filter((item) => item.category === category)
    .map((item) => (
      <>
        <div className="flex mt-4 mx-4 justify-between">
          <div className="flex">
            <img src={item.image} className="object-cover rounded w-32 h-32" />
            <div className="ml-10">
              <p className="mt-4">{item.name}</p>
              <p className="mt-8 text-red-600">{item.price}</p>
            </div>
          </div>
          <div>
            <button className="bg-red-200 rounded px-6 py-2 mt-10">
              เพิ่ม
            </button>
          </div>
        </div>
      </>
    ));
};

export default FoodMenuList;
