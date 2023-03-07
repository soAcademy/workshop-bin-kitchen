import { Link } from "react-router-dom";

const CartPopUp = (props) => {
  // console.log("CartPopUp", props);

  const { setToggle, updateCart, cart, tableId, setTableId, CreateOrder } =
    props;
  const table = [...Array(16).keys()].filter((r) => r > 0);

  return (
    <>
      <div className="fixed top-[20%] right-0 w-screen  font-kanit ">
        <div className="bg-gradient-to-t from-yellow-700  to-yellow-400 p-2 text-left">
          <div className="flex flex-row ">
            <div className="w-[320px]">สั่งอาหาร</div>
            <div className="flex-auto ">
              <button onClick={() => setToggle(false)}>ปิด</button>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="w-10/12">หมายเลขโต๊ะ</div>
            <div className="flex-auto">
              <select
                className="w-[50px] text-center"
                onChange={(e) => setTableId(e.target.value)}
                value={tableId}
              >
                {table?.map((r, idx) => (
                  <option className="h-[20px] w-[10px]  text-center">
                    {r}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>รายการ</div>

          {cart?.map((r) => (
            <div className="flex flex-row my-2 space-x-1">
              <div className="w-[250px] text-teal-50">{r.name}</div>
              <div
                onClick={() =>
                  updateCart({
                    quantity: 0,
                    cart: cart,
                    id: r.id,
                    name: r.name,
                    price: r.price,
                    sign: -1,
                  })
                }
                className="w-[30px] aspect-square bg-red-400 text-center my-auto rounded-full font-bold"
              >
                -
              </div>
              <div className="w-[50px] bg-white border-2 border-slate-200 text-center rounded-lg font-bold">
                {r.quantity}
              </div>
              {console.log("cart in CartPopup", cart)}
              {/* {console.log("r", r)} */}
              {/* {console.log("r for +",cart,r.quantity, r.id, r.name, r.price)} */}
              <div
                onClick={() =>
                  updateCart({
                    quantity: 0,
                    cart: cart,
                    id: r.id,
                    name: r.name,
                    price: r.price,
                    sign: +1,
                  })
                } /////////////
                className="w-[30px] aspect-square bg-teal-200 text-center my-auto rounded-full font-bold"
              >
                +
              </div>
            </div>
          ))}
          <div className="text-center mt-5 mb-2">
            <button
              className="w-[80%] bg-teal-300 rounded-lg p-2 font-bold shadow-lg"
              onClick={() => {
                CreateOrder(cart, tableId);
                setToggle(false);
              }}
            >
              สั่งอาหาร
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartPopUp;
