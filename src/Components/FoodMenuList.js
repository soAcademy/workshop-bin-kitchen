const FoodMenuList = ({ props }) => {
  console.log(props);

  return props.map((item) => (
    <>
      <div>
        <div className="flex w-full mt-4">
          <img
            src={item.image}
            className="object-cover rounded mx-4 w-32 h-32"
          />
          <div>
            <p className="mt-4 bg-red-200">{item.name}</p>
            <p className="mt-8 text-red-600">{item.price}</p>
          </div>
          <div>
            <button className="bg-red-200 rounded px-6 py-2 mt-10 ml-28">
              เพิ่ม
            </button>
          </div>
        </div>
      </div>
    </>
  ));
};

export default FoodMenuList;
