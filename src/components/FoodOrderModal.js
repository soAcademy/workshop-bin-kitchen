import { useState } from "react";
import axios from "axios";

const FoodOrderModal = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [tableId, setTableId] = useState(1);

  const HandleSubmitOrder = (e) => {
    e.preventDefault();

    updateCart(tableId, props.food, quantity);
  };

  const updateCart = (tableId, food, quantity) => {
    const newCart = {
      table_id: Number(tableId),
      items: [
        {
          menu_id: food.id,
          price: food.price,
          quantity: Number(quantity),
          total_price: food.price * quantity,
        },
      ],
    };

    props.setCart(newCart);

    axios({
      method: "post",
      maxBodyLength: Infinity,
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/create-order",
      headers: {
        "Content-Type": "application/json",
      },
      data: newCart,
    }).then((response) => {
      // console.log(response.data);
      props.toggleOrderModal(!props.isOrderModalOpen);
    });
  };

  return (
    <>
      <div
        id="foodOrderModal"
        tabIndex="-1"
        aria-hidden="true"
        className={`fixed inset-0 top-0 left-0 right-0 z-50 h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-50 p-0 ${
          props.isOrderModalOpen ? "flex" : "hidden"
        }`}
      >
        <div className="relative h-full w-full">
          <div className="fixed bottom-0 left-0 right-0 w-full bg-white p-4 shadow shadow-gray-600 md:mx-auto md:w-3/5">
            <div className="mb-4 flex justify-between">
              <div>สั่งอาหาร</div>
              <div>
                <button
                  onClick={() =>
                    props.toggleOrderModal(!props.isOrderModalOpen)
                  }
                >
                  ปิด
                </button>
              </div>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <label htmlFor="tableNo" className="grow">
                หมายเลขโต๊ะ
              </label>
              <input
                type="number"
                id="tableNo"
                name="tableNo"
                min="1"
                max="15"
                className="block w-14 border border-gray-400 p-1 focus:border-blue-500 focus:ring-blue-500"
                onChange={(e) => setTableId(e.target.value)}
              />
            </div>
            <div className="mb-4">รายการ</div>
            <div className="mb-20 flex items-center justify-between ">
              <label htmlFor="quantity" className="grow">
                {props.food.name}
              </label>
              <button
                className="h-8 w-8 bg-red-200 hover:bg-red-300"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                className="mx-2.5 block w-14 border border-gray-400 p-1 text-right focus:border-blue-500 focus:ring-blue-500"
                readOnly={true}
              />
              <button
                className="h-8 w-8 bg-red-200 hover:bg-red-300"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              className="w-full self-center rounded-[10px] bg-red-200 px-6 py-3 text-xl hover:bg-red-300"
              onClick={(e) => HandleSubmitOrder(e)}
            >
              สั่งอาหาร
            </button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 hidden bg-gray-900 bg-opacity-50"></div>
    </>
  );
};

export default FoodOrderModal;
