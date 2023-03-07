import Nav from "./Nav";
import axios from "axios";
import { useState, useEffect } from "react";

const CheckBillMain = () => {
  const [bill, setBill] = useState([]);
  const [tableId, setTableId] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const tableNumber = [...Array(16).keys()].filter((r) => r > 0);
  //fetch
  useEffect(() => {
    axios({
      method: "POST",
      url: "http://localhost:5000/dewKitchen/getOrders",
    }).then((response) => {
      console.log("response.data", response.data);
      setBill(response.data);
    });
  }, []);

  //Choose table
  const CheckBillByTableId = (tableId) => {
    console.log(tableId);
    const preparedData = { tableId: tableId };
    axios({
      method: "POST",
      url: "http://localhost:5000/dewKitchen/getOrderByTableId",
      data: preparedData,
    }).then((response) => {
      console.log("response.data:", response.data);
      setBill(response.data);
    });
  };
  console.log("Bill>>>", bill);
  // console.log("Total prices:", bill[0].items.reduce((acc,r)=>acc+r.totalPrice,0));
  // const _totalPrice = bill[0].items.reduce((acc,r)=>acc+r.totalPrice,0);
  // setTotalPrice(_totalPrice);

  const calculateBill = ()=>{
   const _result=  bill[0].items.reduce((acc,r)=>acc+r.totalPrice,0)

    return setTotalPrice(_result)
  }



  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="font-kanit bg-slate-200 h-screen">
        <div className="text-2xl text-center   bg-red-500">รายการสั่งอาหาร</div>
        <div className="text-2xl text-center mt-7   p-2">
          <div className="text-2xl text-center font-bold">รายการสั่งอาหาร</div>
          <div className="grid grid-cols-5  mx-auto mt-5 gap-4 font-bold">
            {tableNumber?.map((r) => (
              <button
                className="p-4 bg-gradient-to-r from-cyan-200 to-cyan-300 rounded-lg "
                onClick={() => {
                  CheckBillByTableId(r);
                  setTableId(r);
                  setToggle(true);
                  calculateBill();
                }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-row">
            <div className="w-[80%]">
              โต๊ะ {tableId} ยอดรวม {totalPrice} บาท
            </div>
            <div>
              <button className="bg-teal-300 p-2 text-center my-auto rounded-lg">
                เช็คบิล
              </button>
            </div>
          </div>
          {toggle && (
            <div>
              <div>หมายเลขคำสั่งซื้อ #160001</div>

              {bill.map((r) =>
                r.items.map((r) => {
                  return (
                    <>
                      <div className="flex">
                        <div className="p-2 w-2/3">{r.menu.name}</div>
                        <div className="flex px-2">
                          <div>{r.menu.price}</div>
                          <div className="px-2">x{r.quantity}</div>
                        </div>
                      </div>
                    </>
                  );
                })
              )}

              <div className="text-right font-bold">รวม {totalPrice} บาท</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default CheckBillMain;
