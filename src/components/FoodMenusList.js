import React from "react";

const TestManusList = ({setToggleCart, cart, uniqCart, menus}) => {
  return (
    <div>
      {menus.map((data, idx) => (
        <div key={idx} className="flex">
          <div
            className="w-1/6 h-16 mb-2" //aspect ratio 4:3 object-cover
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={data.image} alt="img" className="w-[80px] rounded-lg" />
          </div>
          <div className="w-3/6 pl-8 md:pl-4">
            <p className="text-sm">{data.name}</p>
            <p className="text-sm text-red-500 mt-3">฿{data.price}</p>
          </div>
          <div className="flex w-2/6 justify-end">
            <button
              onClick={() => {
                setToggleCart(true);
                uniqCart(data);
              }}
              className="rounded-lg bg-red-100 px-6 my-3"
            >
              เพิ่ม
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestManusList;
