import axios from "axios";
import { addOrder } from "../hooks";
export const OrderPopUp = ({
  isOrderOpen,
  setIsOrderOpen,
  menuSelected,
  setMenuSelected,
  updateMenuQuantity,
  buttonClicked,
  setButtonClicked,
  setRemoveMenuName,
  setRemoveOrderPopup,
  orders,
}) => {
  
  return (
    <div
      className={` pointer-events-auto z-30 flex min-h-[500px] w-full items-center justify-center duration-500
        md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12
        ${isOrderOpen ? "" : "z-0 translate-y-full opacity-0"}`}
    >
      <div
        className={`min-h-[500px] w-full space-y-4 bg-white p-10 duration-500 md:rounded-xl
        md:text-xl `}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addOrder(menuSelected);
            document.querySelector("#tableNo").value = "";
            setIsOrderOpen(false);
            setMenuSelected({});
          }}
        >
          <div className="flex justify-between md:px-36">
            <span>หมายเลขโต๊ะ</span>
            <input
              id="tableNo"
              type="number"
              min={0}
              max={15}
              required
              placeholder="No."
              className="w-14 rounded-lg border-[1px] border-gray-400 text-center focus:border"
              onChange={(e) => {
                e.target.value = e.target.value.slice(0, 3); // LIMIT INPUT LENGTH
              }}
            ></input>
          </div>
          <div className="w-full border-b border-gray-600 py-4 text-center">
            รายการอาหาร
          </div>
          {/*List menu in the cart */}
          <div className="no-scrollbar h-[200px] space-y-1 overflow-y-auto">
            {Object.values(menuSelected)?.map((menu, idx) => {
              console.log('menuSelected :>> ', menuSelected);
              return (
                <div
                  key={idx}
                  className="flex justify-between py-1 md:px-10 lg:px-20 xl:px-32"
                >
                  <span>{menu.name}</span>
                  <span className="flex">
                    <button
                      type="button"
                      className={`h-8 w-10 rounded-md bg-red-400 shadow-md duration-150 hover:bg-red-500 hover:shadow-lg active:bg-red-300 md:h-6 md:w-10`}
                      onClick={() => {
                        if (menu.quantity > 1) {
                          updateMenuQuantity(menu.name, menu.quantity - 1); // UPDATE MENU QUANTITY
                          setButtonClicked(!buttonClicked); // WHEN THE BUTTON IS CLICKED
                        } else {
                          setRemoveOrderPopup(true);
                          setRemoveMenuName(menu.name);
                        }
                      }}
                    >
                      -
                    </button>
                    <span className="mx-2 my-auto w-6 text-center">
                      {menu.quantity}
                    </span>
                    <button
                      type="button"
                      className="h-8 w-10 rounded-md bg-red-400 shadow-md duration-150 hover:bg-red-500 hover:shadow-lg active:bg-red-300 md:h-6 md:w-10"
                      onClick={() => {
                        updateMenuQuantity(menu.name, menu.quantity + 1); // UPDATE MENU QUANTITY
                        setButtonClicked(!buttonClicked); // WHEN THE BUTTON IS CLICKED
                      }}
                    >
                      +
                    </button>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex w-full justify-center pt-4 ">
            <button
              type="submit"
              id="order"
              className="relative bottom-0 h-10 w-32 rounded-xl bg-blue-500 text-center shadow-md duration-150 hover:bg-blue-600 hover:shadow-lg active:bg-blue-500"
            >
              สั่งอาหาร
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
