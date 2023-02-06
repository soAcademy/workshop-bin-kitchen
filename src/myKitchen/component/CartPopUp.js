import { useState } from "react";

const CartPopUp = (props) => {
  // console.log("CartPopUp", props);
  const { menu, setToggle , updateCart } = props;
  const[quantity, setQuantity] = useState(1);
  const increaseQuantity = ()=> {setQuantity(quantity+1)}; 

  return (
    <>
      <div className="fixed top-[40%] right-0 w-screen bg-cyan-500  p-2  ">
        <div className="bg-cyan-500 p-2 text-left">
          <div className="flex flex-row ">
            <div className="w-[400px]">สั่งอาหาร</div>
            <div className="flex-auto">
              <button onClick={() => setToggle(false)}>ปิด</button>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="w-[400px]">หมายเลขโต๊ะ</div>
            <div className="flex-auto">
              <input className="w-[50px]" type="number" />
            </div>
          </div>
          <div>รายการ</div>
      
            { menu?.map(r=>(
              <div className="flex flex-row ">
                <div className="w-[400px] text-white">{r.name}</div>
                <div className="w-[30px] h-[30px] bg-red-200 text-center p-2">
                  -
                </div>
                <div className="w-[50px] bg-white border-2 border-slate-400 text-center">{quantity}</div>
                <div  onClick={()=>{updateCart(r.id,quantity) ; }}
                      className="w-[30px] h-[30px] bg-red-200 text-center p-2">
                  +
                </div>
              </div>
              ))
            }
        </div>
      </div>
    </>
  );
};
export default CartPopUp;
