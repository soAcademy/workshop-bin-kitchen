import React from "react";
import { BsX, BsCart2 } from "react-icons/bs";

const PopupForm = ({
  onCloseButtonClicked,
  onBypassAddButtonClickedToApps,
  orders,
  setOrders,
  setOpenPop,
}) => {
  // onBypassAddButtonClickedToApps();
  // onCloseButtonClicked();
  console.log("popuporder", orders);

  const [count, setCount] = React.useState(0);

  const submitData = (e) => {
    e.preventDefault(); // ใช้เพื่อป้องกันการ refresh หน้า ตอนกด submit
    debugger;
    const data = {
      table: e.target["table"].value,
      amount: e.target["amount"].value,
    };
    console.log(data);
  };

  return (
    <>
    {/* modal here */}
      <div className="shadow-md w-full z-[50] fixed top-0 left-0">
        <div className="fixed inset-x-0 top-15  h-full bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
          <div className=""></div>
        </div>
      </div>
      {/* pop here */}
      <div className="shadow-md w-full fixed left-0 bg-gray-100 bottom-0 z-[100]">
        <div className="flex justify-between px-4 bg-yellow-600  text-white align-center h-[50px]">
          <div className="flex w-1/3 items-center justify-start">สั่งอาหาร</div>
          <button
            onClick={() => setOpenPop(false)}
            className="flex items-center justify-end text-xl"
          >
            <BsX />
          </button>
        </div>
        <form className="p-4" onSubmit={(e) => submitData(e)}>
          <div className="flex justify-between align-center h-[50px]">
            <div className="flex w-1/3 items-center align-center">
              หมายเลขโต๊ะ
            </div>

            <div className="flex bg-white w-1/3 h-[40px] items-center my-auto rounded-xl">
              <div
                onClick={() => setCount(count - 1)}
                className="w-1/3 text-center text-md"
              >
                -
              </div>
              <input
                id="table"
                value={count}
                type="number"
                className="w-1/3 text-center text-md"
                required
              ></input>
              <div
                onClick={() => setCount(count + 1)}
                className="w-1/3 text-center text-md"
              >
                +
              </div>
            </div>
          </div>

          <div className="flex w-1/3 items-center py-4">รายการ</div>
          {orders?.map((order) => {
            return (
              <>
                <div className="flex justify-between align-center  h-[50px]">
                  <div className="flex w-1/3 items-center align-center">
                    {order.name}
                  </div>
                  <div className="flex bg-white w-1/3 h-[40px] items-center my-auto rounded-xl">
                    <div
                      onClick={() => setCount(count - 1)}
                      className="w-1/3 text-center text-md"
                    >
                      -
                    </div>
                    <input
                      id="amount"
                      value={count}
                      type="number"
                      className="w-1/3 text-center text-md"
                      required
                    ></input>
                    <div
                      onClick={() => setCount(count + 1)}
                      className="w-1/3 text-center text-md"
                    >
                      +
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          <div className="py-4">
            <button
              className="w-full bg-yellow-600  text-white p-4 rounded-xl hover:bg-yellow-700"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PopupForm;
