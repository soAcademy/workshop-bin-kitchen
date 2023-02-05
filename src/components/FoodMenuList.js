

const FoodMenuList = (props) => {
  console.log("props:", props);

  return (
    <div>
      <h1 className="text-3xl font-bold p-2">เมนู{props.category}</h1>
      <div className="lg:flex">
        {props.foodMenus.map((r) => {
          return (
            <div className="border-2 border-yellow-700 rounded-xl m-5 flex justify-between items-center lg:flex-col">
              <div className="flex lg:flex-col lg:items-center">
              <div>
                <img
                  className="w-[250px] rounded-lg m-5 lg:m-3"
                  src={r.image}
                />
              </div>
              <div className="text-center">
                <div className="m-5 lg:m-0 text-2xl">{r.name}</div>
                <div className="m-5 lg:m-0 text-2xl text-red-500">
                  ฿{r.price}
                </div>
              </div>
              </div>
              <div className="mr-5">
                <button onClick={() => props.addItem(r)} className="lg:mb-2 lg:my-3 uppercase text-center border-1 bg-slate-200 px-7 py-2 text-2xl text-red-600 rounded-lg font-semibold">
                  Add
                </button>
               
              </div>
            </div>
          );
        })}
      </div>
    </div>

    // <div>
    //   <h1 className="ml-5">เมนู{props.category}</h1>
    //   {props.foodMenus.map((r) => {
    //     //เปลี่ยน data => foodMenus
    //     return (
    //       <div className="flex justify-between items-center m-5">
    //         <div className="flex">
    //           <div>
    //             <img className="w-[70px] rounded-lg" src={r.image} />
    //           </div>
    //           <div>
    //             <div className="ml-10">{r.name}</div>
    //             <div className="ml-10">{r.price}</div>
    //           </div>
    //         </div>
    //         <div>
    //           <button className="uppercase text-center border-1 bg-slate-200 px-5 py-2 text-red-600 rounded-lg font-semibold">
    //             Add
    //           </button>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default FoodMenuList;
