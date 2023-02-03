import { useState } from "react";
import axios from "axios";

const FoodOrderModal = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [tableId, setTableId] = useState(1);

  const handleDecreaseQuantity = (e) => {
    e.preventDefault();

    quantity > 1 && setQuantity(quantity - 1);
  };

  const handleIncreaseQuantity = (e) => {
    e.preventDefault();

    setQuantity(quantity + 1);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();

    updateCart(props.cartItems, props.food, quantity);
  };

  const updateCart = (cartItems, food, quantity) => {
    if (cartItems.some((item) => item.menu_id === food.id)) {
      props.setCartItems(
        cartItems.reduce((acc, item) => {
          if (item.menu_id === food.id) {
            console.log("matched");
            acc.push({
              menu_id: food.id,
              price: food.price,
              quantity: item.quantity + Number(quantity),
              total_price: item.total_price + food.price * Number(quantity),
            });
          } else {
            acc.push(item);
          }
          return acc;
        }, [])
      );
    } else {
      props.setCartItems([
        ...cartItems,
        {
          menu_id: food.id,
          price: food.price,
          quantity: Number(quantity),
          total_price: food.price * quantity,
        },
      ]);
    }
    //   props.setCart({
    //     table_id: Number(tableId),
    //     items: [
    //       {
    //         menu_id: food.id,
    //         price: food.price,
    //         quantity: Number(quantity),
    //         total_price: food.price * quantity,
    //       },
    //     ],
    //   });
    // } else {
    //   const updatedItems = [...props.cart.items];
    //   console.log(updatedItems);

    //   updatedItems.reduce((acc, item) => {
    //     console.log(item.menu_id);
    //     console.log(food.id);
    //     if (item.menu_id === food.id) {
    //       acc.push({
    //         menu_id: food.id,
    //         price: food.price,
    //         quantity: item.quantity + Number(quantity),
    //         total_price: item.price + food.price * quantity,
    //       });
    //       // item.quantity += Number(quantity);
    //       // item.price += food.price * quantity;
    //     } else {
    //       // acc.push({
    //       //   menu_id: food.id,
    //       //   price: food.price,
    //       //   quantity: Number(quantity),
    //       //   total_price: food.price * quantity,
    //       // });
    //       acc.push(item);
    //       console.log(acc);
    //     }
    //     return [...acc, item];
    //   }, []);

    //   console.log(updatedItems);

    //   const updatedCart = {
    //     table_id: Number(tableId),
    //     // items: [
    //     //   {
    //     //     menu_id: food.id,
    //     //     price: food.price,
    //     //     quantity: Number(quantity),
    //     //     total_price: food.price * quantity,
    //     //   },
    //     // ],
    //     items: updatedItems,
    //   };

    //   props.setCart(updatedCart);
    // }

    // axios({
    //   method: "post",
    //   maxBodyLength: Infinity,
    //   url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/create-order",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: updatedCart,
    // }).then((response) => {
    //   // console.log(response.data);
    //   props.toggleOrderModal(!props.isOrderModalOpen);
    // });
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
                onClick={(e) => handleDecreaseQuantity(e)}
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
                onClick={(e) => handleIncreaseQuantity(e)}
              >
                +
              </button>
            </div>
            <button
              className="w-full self-center rounded-[10px] bg-red-200 px-6 py-3 text-xl hover:bg-red-300"
              onClick={(e) => handleSubmitOrder(e)}
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
