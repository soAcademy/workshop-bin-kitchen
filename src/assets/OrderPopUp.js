import axios from "axios";
const OrderPopUp = ({
  isOrderOpen,
  setIsOrderOpen,
  menuNameArray,
  menuAmountArray,
  menuSelected,
  setMenuSelected,
  updateMenuAmount,
  buttonClicked,
  setButtonClicked,
  setRemoveMenuName,
  setRemoveOrderPopup,
  orders,
}) => {
  const addOrder = () => {
    const _tableId = document.querySelector("#tableNo").value;
    const _menuSelected = Object.values(menuSelected).sort(
      (a, b) => a.id - b.id
    );
    const _items = _menuSelected.map((item) => {
      return {
        menu_id: item.id,
        price: item.price,
        quantity: item.amount,
        total_price: item.price * item.amount,
      };
    });
    const _data = JSON.stringify({
      table_id: _tableId,
      items: _items,
    });
    const _config = {
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/create-order",
      headers: {
        "Content-Type": "application/json",
      },
      data: _data,
    };
    axios(_config)
      .then(function (response) {
        console.log("response.data :>> ", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div
      className={`flex z-30 justify-center min-h-[500px] w-full items-center duration-500
        md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12
        ${isOrderOpen ? "" : "translate-y-full opacity-0 z-0"}`}
    >
      <div
        className={`bg-white w-full p-10 min-h-[500px] space-y-4 duration-500 md:rounded-xl
        md:text-xl `}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addOrder();
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
              className="w-14 rounded-lg text-center border-[1px] border-gray-400 focus:border"
              onChange={(e) => {
                e.target.value = e.target.value.slice(0, 3); // LIMIT INPUT LENGTH
              }}
            ></input>
          </div>
          <div className="text-center w-full border-b border-gray-600 py-4">
            รายการอาหาร
          </div>
          {/*List menu in the cart */}
          <div className="h-[200px] overflow-y-auto no-scrollbar space-y-1">
            {Object.values(menuSelected)?.map((menu, idx) => {
              // console.log('menuSelected :>> ', menuSelected);
              return (
                <div
                  key={idx}
                  className="flex justify-between py-1 md:px-10 lg:px-20 xl:px-32"
                >
                  <span>{menu.name}</span>
                  <span className="flex">
                    <button
                      type="button"
                      className={`w-10 h-8 bg-red-400 rounded-md md:w-10 md:h-6 hover:bg-red-500 active:bg-red-300 shadow-md hover:shadow-lg duration-150`}
                      onClick={() => {
                        if (menu.amount > 1) {
                          updateMenuAmount(menu.name, menu.amount - 1); // UPDATE MENU AMOUNT
                          setButtonClicked(!buttonClicked); // WHEN THE BUTTON IS CLICKED
                        } else {
                          setRemoveOrderPopup(true);
                          setRemoveMenuName(menu.name);
                        }
                      }}
                    >
                      -
                    </button>
                    <span className="w-6 mx-2 text-center my-auto">
                      {menu.amount}
                    </span>
                    <button
                      type="button"
                      className="w-10 h-8 bg-red-400 rounded-md md:w-10 md:h-6 hover:bg-red-500 active:bg-red-300 shadow-md hover:shadow-lg duration-150"
                      onClick={() => {
                        updateMenuAmount(menu.name, menu.amount + 1); // UPDATE MENU AMOUNT
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
          <div className="w-full flex justify-center pt-4 ">
            <button
              type="submit"
              id="order"
              className="w-32 h-10 text-center rounded-xl bg-blue-500 relative bottom-0 hover:bg-blue-600 active:bg-blue-500 shadow-md hover:shadow-lg duration-150"
            >
              สั่งอาหาร
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderPopUp;
