import { useState } from "react";

const FoodOrderModal = (props) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div
        id="foodOrderModal"
        tabIndex="-1"
        aria-hidden="true"
        className="h-modal fixed bottom-0 left-0 right-0 z-50 flex w-full overflow-y-auto overflow-x-hidden"
      >
        <div className="relative h-full w-full md:h-auto">
          <div className="relative bg-white p-4 shadow">
            <div className="mb-4">สั่งอาหาร</div>
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
            <button className="w-full self-center rounded-[10px] bg-red-200 px-6 py-3 text-xl hover:bg-red-300">
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
