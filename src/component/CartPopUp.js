import React, { useState, useEffect } from "react";

const CartPopUp = (props) => {
  console.log("CartPopUp",props);
  const {setCart,addCart,order} = props;
  const [count, setCount] = useState(1);
  const [carts, setCarts] = useState();

  // useEffect(() =>
  //   setCarts([order])
  // ,[])

  

  return (
    <>

      <div className="flex flex-col gap-1 w-screen fixed top-[40%] right-0 h-1/3 bg-zinc-100  p-2 shadow-lg border-t-2 border-slate-500 ">
        <div className="flex flex-row">
          <div className=" w-11/12">สั่งอาหาร</div>
          <div className=" w-1/12">ปิด</div>
        </div>
        <div className="flex flex-row w-full">
          <div className="w-11/12">หมายเลขโต๊ะ</div>
          <div>
            <input
              type="number"
              className="w-4/12 border-2 border-black float-right text-center"
            />
          </div>
        </div>
        <div className="h-1/2 flex flex-row flex justify-between">
          <div className="">
            รายการ
            <br />
            {order.name}
          </div>
          <div className="flex flex-row  ">
            <div className=" flex flex-row h-[25px] mt-[25%]">
              <button onClick={()=>setCount(count-1)} className="bg-red-200 w-[20px] h-[20px] my-auto">
                -
              </button>
              <div className="px-4 border-2 border-slate-500 mx-2 my-auto ">
                {count}
              </div>
              <button onClick={()=>{
                                    setCount(count+1)
                                    setCart(carts)
                                    addCart(carts,count) 
                                  }
                              } className="bg-red-200 w-[20px] h-[20px] my-auto">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="bg-transparant h-full"></div>
        <button
          onClick={() =>{}}
          className="bg-red-200  rounded-lg text-xl pb-1 mt-1 "
        >
          สั่งอาหาร
        </button>
      </div>
    </>
  );
};
export default CartPopUp;
